import { useState } from "react";
import { validateGame } from "../utils/validation";

// Formular zum Erfassen/Bearbeiten eines Spiels.
// - initialValues: Startwerte (beim Bearbeiten gefüllt, beim Neuanlegen leer)
// - onSubmit: wird NUR aufgerufen, wenn die Validierung erfolgreich ist
function GameForm({
  initialValues = { title: "", genre: "", platform: "", rating: 3, imageUrl: "", note: "" },
  onSubmit,
  submitLabel = "Speichern",
}) {
  const [title, setTitle] = useState(initialValues.title);
  const [genre, setGenre] = useState(initialValues.genre);
  const [platform, setPlatform] = useState(initialValues.platform);
  const [rating, setRating] = useState(initialValues.rating);
  const [imageUrl, setImageUrl] = useState(initialValues.imageUrl);
  const [note, setNote] = useState(initialValues.note);
  const [errors, setErrors] = useState({});

  function handleSubmit(event) {
    event.preventDefault();

    // 1. Client-seitige Validierung der Pflichtfelder
    const validationErrors = validateGame({ title, rating });
    setErrors(validationErrors);

    // 2. Nur speichern, wenn keine Fehler vorliegen
    if (Object.keys(validationErrors).length === 0) {
      onSubmit({
        title: title.trim(),
        genre: genre.trim(),
        platform: platform.trim(),
        rating: Number(rating),
        imageUrl: imageUrl.trim(),
        note: note.trim(),
      });
    }
  }

  return (
    <form className="game-form" onSubmit={handleSubmit} noValidate>
      <label>
        Titel *
        <input value={title} onChange={(e) => setTitle(e.target.value)} placeholder="z.B. Minecraft" />
      </label>
      {errors.title && <p className="error">{errors.title}</p>}

      <label>
        Plattform
        <input value={platform} onChange={(e) => setPlatform(e.target.value)} placeholder="z.B. PC, PS5, Switch" />
      </label>

      <label>
        Genre
        <input value={genre} onChange={(e) => setGenre(e.target.value)} placeholder="z.B. Adventure" />
      </label>

      <label>
        Bewertung (1-5) *
        <input type="number" min="1" max="5" value={rating} onChange={(e) => setRating(e.target.value)} />
      </label>
      {errors.rating && <p className="error">{errors.rating}</p>}

      <label>
        Bild-Link (optional)
        <input value={imageUrl} onChange={(e) => setImageUrl(e.target.value)} placeholder="https://..." />
      </label>

      <label>
        Notiz (optional)
        <textarea value={note} onChange={(e) => setNote(e.target.value)} placeholder="Deine Meinung zum Spiel" />
      </label>

      <button className="btn" type="submit">{submitLabel}</button>
    </form>
  );
}

export default GameForm;
