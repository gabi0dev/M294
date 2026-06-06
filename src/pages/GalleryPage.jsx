import { useEffect, useState } from "react";
import { getGames, deleteGame } from "../api/gamesApi";
import GameCard from "../components/GameCard";

// Dieses file wurde mithilfe von Claude & ChatGPT korrigiert.
function GalleryPage() {
  const [games, setGames] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  async function loadGames() {
    setLoading(true);
    setError("");
    try {
      const data = await getGames();
      setGames(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }


  useEffect(() => {
    loadGames();
  }, []);

  async function handleDelete(id) {
    if (!window.confirm("Dieses Spiel wirklich löschen?")) return;
    try {
      await deleteGame(id);
      setGames((prev) => prev.filter((g) => g.id !== id));
    } catch (err) {
      setError(err.message);
    }
  }

  return (
    <div className="page">
      <h1>Meine Spiele</h1>

      {loading && <p>Lädt …</p>}
      {error && <p className="error">{error}</p>}
      {!loading && games.length === 0 && <p>Noch keine Spiele. Füge oben eins hinzu!</p>}

      <div className="game-grid">
        {games.map((game) => (
          <GameCard key={game.id} game={game} onDelete={handleDelete} />
        ))}
      </div>
    </div>
  );
}

export default GalleryPage;
