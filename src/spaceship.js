class Spaceship {
  
  constructor(name, crew, phasers, shields) {
    this.name = name;
    this.phasers = phasers;
    this.shields = shields;
    this.cloaked = false;
    this.crew = crew;
    this.warpDrive = 'disengaged';
    this.phasersCharge = 'uncharged';
    this.docked = crew.length ? false : true;
    this.setCrew();
  }

  setCrew() {
    this.crew.forEach(member => {
      member.currentShip = this
    });
  }




}


