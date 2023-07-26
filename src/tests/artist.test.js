const Artist = require("../components/artist");

describe("Artist", () => {
  test("it returns the artist's first name", () => {
    const artist = new Artist("Dita");
    expect(artist.firstName).toEqual("Dita");
  });
});
