const Painter = require("../components/painter");

describe("Painter", () => {
  const painter = new Painter(
    "William",
    "Turner",
    90,
    30,
    90,
    20,
    "nineteenth century",
    "atmospheric",
    "oil",
    "Slave Ship"
  );

  //1
  test("it returns the medium used", () => {
    expect(painter.medium).toEqual("oil");
  });

  //2
  test("it returns the artist's full name", () => {
    expect(painter.fullName()).toEqual("William Turner");
  });

  //3
  test("it returns artists most famous work", () => {
    expect(painter.bestArtwork).toEqual("Slave Ship");
  });

  //4
  test("it returns intro statement", () => {
    expect(painter.intro()).toEqual(
      "William Turner, nineteenth century painter, known for atmospheric oil paintings such as Slave Ship"
    );
  });
});
