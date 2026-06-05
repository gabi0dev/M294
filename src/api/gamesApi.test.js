import { describe, it, expect, vi, beforeEach } from "vitest";
import { getGames, createGame } from "./gamesApi";

describe("gamesApi", () => {
  beforeEach(() => {
    // fetch wird gemockt -> kein echter Netzwerk-Aufruf im Test. <- Dieses File wurde mithilfe von Claude & ChatGPT ergänzt.
    global.fetch = vi.fn().mockResolvedValue({
      ok: true,
      json: async () => [],
    });
  });

  it("getGames ruft den /games-Endpoint auf", async () => {
    await getGames();
    expect(fetch).toHaveBeenCalledWith(expect.stringContaining("/games"));
  });

  it("createGame schickt einen POST-Request", async () => {
    await createGame({ title: "Test", rating: 3 });
    expect(fetch).toHaveBeenCalledWith(
      expect.stringContaining("/games"),
      expect.objectContaining({ method: "POST" })
    );
  });
});
