package ch.wiss.gamesbackend.exception;

public class GameNotFoundException extends RuntimeException {

    public GameNotFoundException(Long id) {
        super("Kein Spiel mit der id " + id + " gefunden!");
    }
}
