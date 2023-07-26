const Artist = require("../components/artist");

describe("Artist", () => {
  test("it returns the artists full name", () => {
    const artist = new Artist();
    expect(artist.name()).toEqual("Michelangelo di Lodovico Buonarroti Simoni");
  });
});
