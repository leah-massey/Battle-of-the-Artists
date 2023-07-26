class Artist {
  constructor(
    firstName,
    secondName,
    skill,
    charisma,
    ingenuity,
    scandal,
    era,
    descriptionOfStyle
  ) {
    this.firstName = firstName;
    this.secondName = secondName;
    this.skill = skill;
    this.charisma = charisma;
    this.ingenuity = ingenuity;
    this.era = era;
    this.descriptionOfStyle = descriptionOfStyle;
  }

  fullName() {
    return `${this.firstName} ${this.secondName}`;
  }
}

module.exports = Artist;
