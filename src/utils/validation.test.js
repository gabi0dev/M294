import { describe, it, expect } from "vitest";
import { validateGame } from "./validation";

describe("validateGame", () => {

  it("meldet einen Fehler, wenn der Titel leer ist", () => {
    const errors = validateGame({ title: "", rating: 3 });
    expect(errors.title).toBeDefined();

  });

  it("meldet keinen Fehler, wenn alles korrekt ausgefüllt ist", () => {
    const errors = validateGame({ title: "Tetris", rating: 5 });
    expect(Object.keys(errors).length).toBe(0);

  });

  it("meldet einen Fehler, wenn die Bewertung ausserhalb 1-5 liegt", () => {
    const errors = validateGame({ title: "Tetris", rating: 9 });
    expect(errors.rating).toBeDefined();

  });
});
