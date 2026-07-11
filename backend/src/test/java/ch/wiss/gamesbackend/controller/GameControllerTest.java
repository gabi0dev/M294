package ch.wiss.gamesbackend.controller;

import ch.wiss.gamesbackend.dto.GameDTO;
import ch.wiss.gamesbackend.exception.GameNotFoundException;
import ch.wiss.gamesbackend.service.GameService;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.webmvc.test.autoconfigure.WebMvcTest;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.test.context.bean.override.mockito.MockitoBean;
import org.springframework.test.web.servlet.assertj.MockMvcTester;

import java.util.List;

import static org.assertj.core.api.Assertions.assertThat;
import static org.mockito.BDDMockito.given;

@WebMvcTest(GameController.class)
public class GameControllerTest {

    @Autowired
    private MockMvcTester mvc;

    @MockitoBean
    private GameService service;

    @Test
    void getByIdReturns200WithBody() {

        GameDTO dto = new GameDTO(1L, "Hollow Knight", "Metroidvania", "PC", "", List.of());
        given(service.getGameById(1L)).willReturn(dto);

        assertThat(mvc.get().uri("/api/games/1"))
                .hasStatusOk()
                .bodyJson()
                .extractingPath("$.title")
                .isEqualTo("Hollow Knight");
    }

    @Test
    void getByIdReturns404WhenServiceThrows() {

        given(service.getGameById(999L))
                .willThrow(new GameNotFoundException(999L));

        assertThat(mvc.get().uri("/api/games/999"))
                .hasStatus(HttpStatus.NOT_FOUND);
    }

    @Test
    void createWithInvalidBodyReturns400() {

        String invalidJson = """
            {
              "title": "",
              "genre": "Adventure",
              "platform": "PC",
              "imageUrl": "",
              "reviews": [{"reviewerName": "Anna", "rating": 5, "comment": "Top!"}]
            }
            """;

        assertThat(mvc.post().uri("/api/games")
                .contentType(MediaType.APPLICATION_JSON)
                .content(invalidJson))
                .hasStatus(HttpStatus.BAD_REQUEST);
    }
}

// Dieser Test wurde mit hilfe von Claude erstellt. Er testet den GameController und seine Endpunkte, insbesondere die GET- und POST-Methoden.//