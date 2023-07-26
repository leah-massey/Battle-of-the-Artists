const Artist = require("./artist");

class Painter extends Artist {
  constructor(
    firstName,
    secondName,
    skill,
    charisma,
    ingenuity,
    era,
    descriptionOfArtwork,
    medium,
    bestArtwork
  ) {
    super(
      firstName,
      secondName,
      skill,
      charisma,
      ingenuity,
      era,
      descriptionOfArtwork
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
