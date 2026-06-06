import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createGame } from "../api/gamesApi";
import GameForm from "../components/GameForm";


function AddGamePage() {
  const navigate = useNavigate();
  const [error, setError] = useState("");

  async function handleCreate(formData) {
    try {
      await createGame(formData);
      navigate("/");
    } catch (err) {
      setError(err.message);
    }
  }

  return (
    <div className="page">
      <h1>Neues Spiel hinzufügen</h1>
      {error && <p className="error">{error}</p>}
      <GameForm onSubmit={handleCreate} submitLabel="Spiel hinzufügen" />
    </div>
  );
}

export default AddGamePage;
