package ch.wiss.gamesbackend.repository;

import ch.wiss.gamesbackend.model.Game;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.data.jpa.test.autoconfigure.DataJpaTest;
import org.springframework.boot.jdbc.test.autoconfigure.AutoConfigureTestDatabase;

import java.util.Optional;

import static org.assertj.core.api.Assertions.assertThat;

@DataJpaTest
@AutoConfigureTestDatabase(replace = AutoConfigureTestDatabase.Replace.NONE)
public class GameRepositoryTest {

    @Autowired
    private GameRepository repository;

    @Test
    void saveAndFindByIdReturnsGame() {

        Game game = new Game("Test-Spiel", "Adventure", "PC", "");
        Game saved = repository.save(game);

        Optional<Game> result = repository.findById(saved.getId());

        assertThat(result).isPresent();
        assertThat(result.get().getTitle()).isEqualTo("Test-Spiel");
    }

    @Test
    void findByIdReturnsEmptyForUnknownId() {

        Optional<Game> result = repository.findById(-1L);

        assertThat(result).isEmpty();
    }
}

// Dieser Test wurde mit hilfe von Claude erstellt. Er testet das GameRepository und seine Methoden save() und findById().//