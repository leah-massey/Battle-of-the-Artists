const Performer = require("../components/performer");

describe("Performer", () => {
  const performer = new Performer(
    "Dita",
    "Von Teese",
    70,
    80,
    50,
    40,

    "twentyfirst century",
    "saucy",
    "Burlesque Dancer",
    "stage"
  );

  test("it returns a statement about the performer", () => {
    expect(performer.intro()).toEqual(
      "Dita Von Teese is a twentyfirst century Burlesque Dancer, best known for saucy performances on stage"
    );
  });
});
