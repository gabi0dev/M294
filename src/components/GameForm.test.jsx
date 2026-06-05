import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import GameForm from "./GameForm";

describe("GameForm", () => {
  it("zeigt einen Fehler und speichert nicht, wenn der Titel leer ist", async () => {
    const handleSubmit = vi.fn();
    render(<GameForm onSubmit={handleSubmit} />);

    await userEvent.click(screen.getByRole("button", { name: /speichern/i }));

    expect(screen.getByText("Bitte gib einen Titel ein.")).toBeInTheDocument();
    expect(handleSubmit).not.toHaveBeenCalled();
  });

  it("ruft onSubmit auf, wenn das Formular korrekt ausgefüllt ist", async () => {
    const handleSubmit = vi.fn();
    render(<GameForm initialValues={{ title: "Doom", genre: "", platform: "", rating: 4, imageUrl: "", note: "" }} onSubmit={handleSubmit} />);

    await userEvent.click(screen.getByRole("button", { name: /speichern/i }));

    expect(handleSubmit).toHaveBeenCalledWith(expect.objectContaining({ title: "Doom", rating: 4 }));
  });
});
