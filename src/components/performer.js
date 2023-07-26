const Artist = require("./artist");

class Performer extends Artist {
  constructor(
    firstName,
    secondName,
    skill,
    charisma,
    ingenuity,
    scandal,
    era,
    descriptionOfStyle,
    performanceType,
    platform
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
    this.performanceType = performanceType;
    this.platform = platform;
  }

  intro() {
    return `${super.fullName()} is a ${this.era} ${
      this.performanceType
    }, best known for ${this.descriptionOfStyle} performances on ${
      this.platform
    }`;
  }
}

module.exports = Performer;
