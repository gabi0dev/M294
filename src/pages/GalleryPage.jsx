import { useEffect, useState } from "react";
import { getGames, deleteGame } from "../api/gamesApi";
import GameCard from "../components/GameCard";

// Startseite: zeigt alle Spiele (READ) und erlaubt das Löschen (DELETE).
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

  // Spiele laden, sobald die Seite das erste Mal angezeigt wird
  useEffect(() => {
    loadGames();
  }, []);

  async function handleDelete(id) {
    if (!window.confirm("Dieses Spiel wirklich löschen?")) return;
    try {
      await deleteGame(id);
      // Gelöschtes Spiel aus der Liste entfernen
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
