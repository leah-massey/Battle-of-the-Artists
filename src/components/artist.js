class Artist {
  constructor(
    firstName,
    secondName,
    skill,
    charisma,
    ingenuity,
    era,
    descriptionOfArtwork
  ) {
    this.firstName = firstName;
    this.secondName = secondName;
    this.skill = skill;
    this.charisma = charisma;
    this.ingenuity = ingenuity;
    this.era = era;
    this.descriptionOfArtwork = descriptionOfArtwork;
  }

  fullName() {
    return `${this.firstName} ${this.secondName}`;
  }
}

module.exports = Artist;
