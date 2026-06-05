const API_URL = import.meta.env.VITE_API_URL || "http://localhost:3001";


export async function getGames() {
  const response = await fetch(`${API_URL}/games`);
  if (!response.ok) {
    throw new Error("Spiele konnten nicht geladen werden.");
  }
  return response.json();
}


export async function getGameById(id) {
  const response = await fetch(`${API_URL}/games/${id}`);
  if (!response.ok) {
    if (response.status === 404) throw new Error("Spiel nicht gefunden.");
    throw new Error("Spiel konnte nicht geladen werden.");
  }
  return response.json();
}


export async function createGame(game) {
  const response = await fetch(`${API_URL}/games`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(game),
  });
  if (!response.ok) {
    throw new Error("Spiel konnte nicht gespeichert werden.");
  }
  return response.json();
}


export async function updateGame(id, game) {
  const response = await fetch(`${API_URL}/games/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(game),
  });
  if (!response.ok) {
    if (response.status === 404) throw new Error("Spiel nicht gefunden.");
    throw new Error("Spiel konnte nicht aktualisiert werden.");
  }
  return response.json();
}


export async function deleteGame(id) {
  const response = await fetch(`${API_URL}/games/${id}`, {
    method: "DELETE",
  });
  if (!response.ok) {
    if (response.status === 404) throw new Error("Spiel nicht gefunden.");
    throw new Error("Spiel konnte nicht gelöscht werden.");
  }
  return true;
}
