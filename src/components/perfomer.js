const Artist = require("./artist");

class Perfomer extends Artist {
  constructor(
    firstName,
    secondName,
    skill,
    charisma,
    ingenuity,
    scandal,
    era,
    descriptionOfStyle,
    perfomanceType
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
    this.medium = medium;
    this.bestArtwork = bestArtwork;
  }

  intro() {
    return `${super.fullName()}, ${this.era} painter, known for ${
      this.descriptionOfArtwork
    } ${this.medium} paintings such as ${this.bestArtwork}`;
  }
}

module.exports = Painter;
