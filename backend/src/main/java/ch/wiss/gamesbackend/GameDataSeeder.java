package ch.wiss.gamesbackend;

import ch.wiss.gamesbackend.model.Game;
import ch.wiss.gamesbackend.model.Review;
import ch.wiss.gamesbackend.repository.GameRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@Component
public class GameDataSeeder implements CommandLineRunner {

    private final GameRepository gameRepository;

    public GameDataSeeder(GameRepository gameRepository) {
        this.gameRepository = gameRepository;
    }

    @Override
    public void run(String... args) {
        if (gameRepository.count() > 0) {
            System.out.println("GameDataSeeder: DB enthaelt bereits Daten, kein Seeding noetig.");
            return;
        }

        Game zelda = new Game("The Legend of Zelda: Breath of the Wild", "Adventure", "Switch", "");
        zelda.addReview(new Review("Anna", 5, "Riesige offene Welt zum Erkunden."));
        zelda.addReview(new Review("Ben", 4, "Toll, aber die Waffen gehen schnell kaputt."));

        Game hollowKnight = new Game("Hollow Knight", "Metroidvania", "PC", "");
        hollowKnight.addReview(new Review("Anna", 4, "Wunderschoen, aber knackig schwer."));

        Game minecraft = new Game(
                "Minecraft",
                "Sandbox",
                "PC",
                "https://graphicsprings.com/wp-content/uploads/2023/07/image-62-1024x576.png.webp"
        );
        minecraft.addReview(new Review("Ben", 5, "sehr cool, laessig ahahahaha"));
        minecraft.addReview(new Review("Chris", 5, "Baue seit Jahren immer noch weiter."));

        gameRepository.save(zelda);
        gameRepository.save(hollowKnight);
        gameRepository.save(minecraft);

        System.out.println("GameDataSeeder: " + gameRepository.count() + " Spiele in die DB geschrieben.");
    }
}
