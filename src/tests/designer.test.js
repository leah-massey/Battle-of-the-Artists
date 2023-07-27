const Designer = require("../components/designer");

describe("Designer", () => {
  const designer = new Designer(
    "Vivienne",
    "Westwood",
    90,
    30,
    90,
    20,
    "twentyfirst century",
    "modern punk",
    "fashion"
  );

  test("it returns best artwork", () => {
    expect(designer.field).toEqual("fashion");
  });
});
