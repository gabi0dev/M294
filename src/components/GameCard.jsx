import { Link } from "react-router-dom";

// Code für die "Cards" wurde mithilfe von Claude entworfen.
function GameCard({ game, onDelete }) {
  return (
    <article className="game-card">
      {game.imageUrl ? (
        <img className="game-cover" src={game.imageUrl} alt={game.title} />
      ) : (
        <div className="game-cover game-cover-placeholder">{game.title.charAt(0)}</div>
      )}

      <div className="game-info">
        <h3>{game.title}</h3>
        <p className="game-meta">{game.platform} · {game.genre}</p>
        <p className="game-rating">{"★".repeat(game.rating)}{"☆".repeat(5 - game.rating)}</p>
        {game.note && <p className="game-note">{game.note}</p>}

        <div className="game-actions">
          <Link className="btn" to={`/spiele/${game.id}/bearbeiten`}>Bearbeiten</Link>
          <button className="btn btn-danger" onClick={() => onDelete(game.id)}>Löschen</button>
        </div>
      </div>
    </article>
  );
}

export default GameCard;
