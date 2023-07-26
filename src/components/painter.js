const Artist = require("./artist");

class Painter extends Artist {
  constructor(
    firstName,
    secondName,
    skill,
    charisma,
    ingenuity,
    era,
    medium,
    bestArtwork
  ) {
    super(firstName, secondName, skill, charisma, ingenuity, era);
    this.medium = medium;
    this.bestArtwork = bestArtwork;
  }
}

module.exports = Painter;
