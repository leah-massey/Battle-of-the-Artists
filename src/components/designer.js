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
    return `${super.fullName()} is a ${this.era} ${
      this.field
    } designer with a ${this.descriptionOfStyle} aesthetic.`;
  }
}

module.exports = Designer;
