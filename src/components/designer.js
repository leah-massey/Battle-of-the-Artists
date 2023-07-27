const Artist = require("./artist");

class Designer extends Artist {
  constructor(
    firstName,
    secondName,
    skill,
    charisma,
    ingenuity,
    scandal,
    era,
    descriptionOfStyle,
    field
  ) {
    super(
      firstName,
      secondName,
      skill,
      charisma,
      ingenuity,
      scandal,
      era,
      descriptionOfStyle
    );

    this.field = field;
  }

  intro() {
    return "Vivienne Westwood is a twentyfirst century fashion designer with a modern punk aesthetic.";
  }
}

module.exports = Designer;
