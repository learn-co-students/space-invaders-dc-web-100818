const spaceShipAll = []

class Spaceship {
  constructor(name, crew, phasers, shields) {
    this.name = name;
    this.phasers = phasers;
    this.shields = shields;
    this.cloaked = false;
    this.warpDrive = "disengaged";
    this.phasersCharge = "uncharged";
    this.crew = crew

    if (crew.length > 0) {
      this.docked = false;
    } else {
      this.docked = true;
    }

    spaceShipAll.push(this)
  }
}
