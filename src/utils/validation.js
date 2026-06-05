// prüfung der felder -g

export function validateGame({ title, rating }) {

  const errors = {};

  if (!title || title.trim() === "") {
    errors.title = "Bitte gib einen Titel ein !!";
  }

  const numericRating = Number(rating);
  if (!rating || numericRating < 1 || numericRating > 5) {
    errors.rating = "Bitte eine Bewertung zwischen 1 und 5 wählen !";
  }

  return errors;






  
}
