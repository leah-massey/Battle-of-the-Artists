const Painter = require("../components/painter");

describe("Painter", () => {
  const painter = new Painter(
    "William",
    "Turner",
    90,
    30,
    90,
    "nineteenth century",
    "atmospheric",
    "oil",
    "Slave Ship"
  );

  test("it returns the medium used", () => {
    expect(painter.medium).toEqual("oil");
  });

  test("it returns the artist's full name", () => {
    expect(painter.fullName()).toEqual("William Turner");
  });

  test("it returns artists most famous work", () => {
    expect(painter.bestArtwork).toEqual("Slave Ship");
  });

  test("it returns intro statement", () => {
    expect(painter.intro()).toEqual(
      "William Turner, nineteenth century painter, known for atmospheric oil paintings such as Slave Ship"
    );
  });
});
