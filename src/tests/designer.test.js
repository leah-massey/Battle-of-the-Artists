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

  test("it returns an intro phrase for the designer", () => {
    expect(designer.intro()).toEqual(
      "Vivienne Westwood is a twentyfirst century fashion designer with a modern punk aesthetic."
    );
  });
});
