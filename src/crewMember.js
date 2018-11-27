class CrewMember {
  constructor(position, currentShip = 'Looking for a Rig') {
    this.position = position
    this.currentShip = currentShip

    if(typeof(currentShip) === 'object' ) {
      this.spaceship = currentShip
    }
  }

  specialAbility() {
    return typeof(this.currentShip) === 'object' ? true : false
  }

  chargePhasers() {
    if(this.specialAbility() && this.position === 'Gunner') {
      this.currentShip.phasersCharge = 'charged'
    }

    else { return 'had no effect'}
  }

  engageWarpDrive() {
    if(this.specialAbility() && this.position === 'Pilot') {
      this.currentShip.warpDrive = 'engaged'
    }

    else { return 'had no effect'}
  }

  setsInvisibility() {
    if(this.specialAbility() && this.position === 'Defender') {
      this.currentShip.cloaked = true
    }

    else { return 'had no effect'}
  }
}
