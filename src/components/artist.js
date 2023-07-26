class Artist {
  constructor(firstName, secondName, skill, charisma, ingenuity, era) {
    this.firstName = firstName;
    this.secondName = secondName;
    this.skill = skill;
    this.charisma = charisma;
    this.ingenuity = ingenuity;
    this.era = era;
  }

  fullName() {
    return `${this.firstName} ${this.secondName}`;
  }
}

module.exports = Artist;
