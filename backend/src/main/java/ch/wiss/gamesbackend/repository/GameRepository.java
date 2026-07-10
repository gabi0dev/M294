package ch.wiss.gamesbackend.repository;

import ch.wiss.gamesbackend.model.Game;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

// Datenzugriff 
// Wurde mit hilfe von claude erstellt / N+1 problem lösung
public interface GameRepository extends JpaRepository<Game, Long> {

    @Query("SELECT DISTINCT g FROM Game g LEFT JOIN FETCH g.reviews")
    List<Game> findAllWithReviews();
}
