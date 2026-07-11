package ch.wiss.gamesbackend.service;

import ch.wiss.gamesbackend.dto.GameFormDTO;
import ch.wiss.gamesbackend.dto.ReviewFormDTO;
import ch.wiss.gamesbackend.exception.GameNotFoundException;
import ch.wiss.gamesbackend.model.Game;
import ch.wiss.gamesbackend.repository.GameRepository;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.ArgumentCaptor;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

import java.util.List;
import java.util.Optional;

import static org.assertj.core.api.Assertions.assertThat;
import static org.assertj.core.api.Assertions.assertThatThrownBy;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.BDDMockito.given;
import static org.mockito.Mockito.verify;

@ExtendWith(MockitoExtension.class)
public class GameServiceMockTest {

    @Mock
    private GameRepository repository;

    @InjectMocks
    private GameService service;

    @Test
    void getGameByIdThrowsWhenNotFound() {

        given(repository.findById(999L)).willReturn(Optional.empty());

        assertThatThrownBy(() -> service.getGameById(999L))
                .isInstanceOf(GameNotFoundException.class);
    }

    @Test
    void createGameSavesEntityWithReviews() {

        GameFormDTO form = new GameFormDTO(
                "Stardew Valley",
                "Simulation",
                "PC",
                "",
                List.of(new ReviewFormDTO("Anna", 5, "Sehr entspannend."))
        );
        given(repository.save(any(Game.class)))
                .willAnswer(invocation -> invocation.getArgument(0));

        service.createGame(form);

        ArgumentCaptor<Game> captor = ArgumentCaptor.forClass(Game.class);
        verify(repository).save(captor.capture());
        assertThat(captor.getValue().getTitle()).isEqualTo("Stardew Valley");
        assertThat(captor.getValue().getReviews()).hasSize(1);
    }
}

// Dieser Test wurde mit hilfe von Claude erstellt. Er testet den GameService und seine Methoden getGameById() und createGame().//