package ch.wiss.gamesbackend.service;

import ch.wiss.gamesbackend.dto.GameDTO;
import ch.wiss.gamesbackend.dto.GameFormDTO;
import ch.wiss.gamesbackend.exception.GameNotFoundException;
import ch.wiss.gamesbackend.mapper.GameMapper;
import ch.wiss.gamesbackend.model.Game;
import ch.wiss.gamesbackend.repository.GameRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class GameService {

    private final GameRepository gameRepository;

    public GameService(GameRepository gameRepository) {
        this.gameRepository = gameRepository;
    }

    public List<GameDTO> getAllGames() {
        return gameRepository.findAllWithReviews().stream()
                .map(GameMapper::toDTO)
                .toList();
    }

    public GameDTO getGameById(Long id) {
        Game game = gameRepository.findById(id)
                .orElseThrow(() -> new GameNotFoundException(id));
        return GameMapper.toDTO(game);
    }

    public GameDTO createGame(GameFormDTO form) {
        Game game = GameMapper.toEntity(form);
        Game saved = gameRepository.save(game);
        return GameMapper.toDTO(saved);
    }

    public GameDTO updateGame(Long id, GameFormDTO form) {
        Game bestehendes = gameRepository.findById(id)
                .orElseThrow(() -> new GameNotFoundException(id));

        bestehendes.setTitle(form.title());
        bestehendes.setGenre(form.genre());
        bestehendes.setPlatform(form.platform());
        bestehendes.setImageUrl(form.imageUrl());

        bestehendes.getReviews().clear();
        GameMapper.addReviewsAusForm(bestehendes, form);

        Game saved = gameRepository.save(bestehendes);
        return GameMapper.toDTO(saved);
    }

    public void deleteGame(Long id) {
        if (!gameRepository.existsById(id)) {
            throw new GameNotFoundException(id);
        }
        gameRepository.deleteById(id);
    }
}
