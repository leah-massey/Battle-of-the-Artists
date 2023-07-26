const Painter = require("../components/painter");
const Artist = require("../components/artist");

describe("Painter", () => {
  const painter = new Painter(
    "William",
    "Turner",
    90,
    30,
    90,
    "nineteeth century",
    "oils",
    "Slave Ship"
  );

  test("it returns the medium used", () => {
    expect(painter.medium).toEqual("oils");
  });
});
