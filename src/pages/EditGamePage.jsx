import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getGameById, updateGame } from "../api/gamesApi";
import GameForm from "../components/GameForm";

// Seite zum Bearbeiten eines Spiels (UPDATE).
// Lädt das Spiel anhand der ID aus der URL.
function EditGamePage() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [game, setGame] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function loadGame() {
      try {
        const data = await getGameById(id);
        setGame(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }
    loadGame();
  }, [id]);

  async function handleUpdate(formData) {
    try {
      // id behalten, restliche Felder aus dem Formular übernehmen
      await updateGame(id, { id: game.id, ...formData });
      navigate("/");
    } catch (err) {
      setError(err.message);
    }
  }

  if (loading) return <div className="page"><p>Lädt …</p></div>;
  if (error) return <div className="page"><p className="error">{error}</p></div>;

  return (
    <div className="page">
      <h1>Spiel bearbeiten</h1>
      <GameForm
        initialValues={game}
        onSubmit={handleUpdate}
        submitLabel="Änderungen speichern"
      />
    </div>
  );
}

export default EditGamePage;
