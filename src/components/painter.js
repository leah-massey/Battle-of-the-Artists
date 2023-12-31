const Artist = require("./artist");

class Painter extends Artist {
  constructor(
    firstName,
    secondName,
    skill,
    charisma,
    ingenuity,
    scandal,
    era,
    descriptionOfStyle,
    medium,
    bestArtwork
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
      this.descriptionOfStyle
    } ${this.medium} paintings such as ${this.bestArtwork}`;
  }
}

module.exports = Painter;
