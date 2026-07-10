package ch.wiss.gamesbackend.mapper;

import ch.wiss.gamesbackend.dto.GameDTO;
import ch.wiss.gamesbackend.dto.GameFormDTO;
import ch.wiss.gamesbackend.dto.ReviewDTO;
import ch.wiss.gamesbackend.dto.ReviewFormDTO;
import ch.wiss.gamesbackend.model.Game;
import ch.wiss.gamesbackend.model.Review;

import java.util.List;

public class GameMapper {

    private GameMapper() {

    }

    public static GameDTO toDTO(Game game) {
        List<ReviewDTO> reviewDTOs = game.getReviews().stream()
                .map(GameMapper::toReviewDTO)
                .toList();

        return new GameDTO(
                game.getId(),
                game.getTitle(),
                game.getGenre(),
                game.getPlatform(),
                game.getImageUrl(),
                reviewDTOs
        );
    }

    public static ReviewDTO toReviewDTO(Review review) {
        return new ReviewDTO(
                review.getId(),
                review.getReviewerName(),
                review.getRating(),
                review.getComment()
        );
    }

    public static Game toEntity(GameFormDTO dto) {
        Game game = new Game(dto.title(), dto.genre(), dto.platform(), dto.imageUrl());
        addReviewsAusForm(game, dto);
        return game;
    }

    public static void addReviewsAusForm(Game game, GameFormDTO dto) {
        if (dto.reviews() != null) {
            for (ReviewFormDTO r : dto.reviews()) {
                game.addReview(new Review(r.reviewerName(), r.rating(), r.comment()));
            }
        }
    }
}
