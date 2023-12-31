const Artist = require("../components/artist");

describe("Artist", () => {
  const artist = new Artist(
    "Dita",
    "Von Teese",
    70,
    80,
    50,
    40,
    "twentyfirst century"
  );

  //1
  test("it returns the artist's first name", () => {
    expect(artist.firstName).toEqual("Dita");
  });

  //2
  test("it returns the artist's second name", () => {
    expect(artist.secondName).toEqual("Von Teese");
  });

  //3
  test("it returns the artist's skill level", () => {
    expect(artist.skill).toEqual(70);
  });

  //4
  test("it returns the artist's charisma level", () => {
    expect(artist.charisma).toEqual(80);
  });

  //5
  test("it returns the artist's ingenuity level", () => {
    expect(artist.ingenuity).toEqual(50);
  });

  //6
  test("it returns the artist's full name", () => {
    expect(artist.fullName()).toEqual("Dita Von Teese");
  });

  //7
  test("it returns the artist's era", () => {
    expect(artist.era).toEqual("twentyfirst century");
  });
});
