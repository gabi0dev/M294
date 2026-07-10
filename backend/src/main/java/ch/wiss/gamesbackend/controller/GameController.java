package ch.wiss.gamesbackend.controller;

import ch.wiss.gamesbackend.dto.GameDTO;
import ch.wiss.gamesbackend.dto.GameFormDTO;
import ch.wiss.gamesbackend.service.GameService;
import jakarta.validation.Valid;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class GameController {

    private final GameService gameService;

    public GameController(GameService gameService) {
        this.gameService = gameService;
    }

    @GetMapping("/api/games")
    public List<GameDTO> getGames() {
        return gameService.getAllGames();
    }

    @GetMapping("/api/games/{id}")
    public GameDTO getGameById(@PathVariable Long id) {
        return gameService.getGameById(id);
    }

    @PostMapping("/api/games")
    @ResponseStatus(HttpStatus.CREATED)
    public GameDTO createGame(@Valid @RequestBody GameFormDTO form) {
        return gameService.createGame(form);
    }

    @PutMapping("/api/games/{id}")
    public GameDTO updateGame(@PathVariable Long id, @Valid @RequestBody GameFormDTO form) {
        return gameService.updateGame(id, form);
    }

    @DeleteMapping("/api/games/{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void deleteGame(@PathVariable Long id) {
        gameService.deleteGame(id);
    }
}
