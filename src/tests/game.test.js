const Game = require("../components/game");

describe("Game", () => {
  const game = new Game();

  test("can be instantiated", () => {
    expect(game).toBeInstanceOf(Game);
  });
});
