const Artist = require("../components/artist");

describe("Artist", () => {
  const artist = new Artist(
    "Dita",
    "Von Teese",
    70,
    80,
    50,
    "twentyfirst century"
  );

  test("it returns the artist's first name", () => {
    expect(artist.firstName).toEqual("Dita");
  });

  test("it returns the artist's second name", () => {
    expect(artist.secondName).toEqual("Von Teese");
  });
});
