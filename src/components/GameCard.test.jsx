import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import GameCard from "./GameCard";

function renderCard(game) {
  return render(
    <MemoryRouter>
      <GameCard game={game} onDelete={vi.fn()} />
    </MemoryRouter>
  );
}

describe("GameCard", () => {
  const game = { id: "1", title: "Celeste", genre: "Platformer", platform: "PC", rating: 5, imageUrl: "", note: "" };

  it("zeigt den Titel des Spiels an", () => {
    renderCard(game);
    expect(screen.getByText("Celeste")).toBeInTheDocument();
  });

  it("zeigt Plattform und Genre an", () => {
    renderCard(game);
    expect(screen.getByText("PC · Platformer")).toBeInTheDocument();
  });
});
