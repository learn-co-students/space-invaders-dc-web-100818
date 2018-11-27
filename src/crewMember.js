const crewMemberAll = []

class CrewMember {
  constructor(position) {
    this.position = position;
    crewMemberAll.push(this)
  }

  currentShip() {
    let crewMemberShip =  spaceShipAll.find(
      function(spaceShip) {
        return spaceShip.crew.includes(this)
      }.bind(this)
    )
    if (crewMemberShip) {
      return crewMemberShip;
    } else {
      return "Looking for a Rig"
    }
  }

  engageWarpDrive() {
    if ((this.position === "Pilot") && (typeof this.currentShip() === "object")) {
      this.currentShip().warpDrive = "engaged"
    } else {
      return "had no effect"
    }
  }

  setsInvisibility() {
    if ((this.position === "Defender") && (typeof this.currentShip() === "object")) {
      this.currentShip().cloaked = true
    } else {
      return "had no effect"
    }
  }

  chargePhasers() {
    if ((this.position === "Gunner") && (typeof this.currentShip() === "object")) {
      this.currentShip().phasersCharge = "charged"
    } else {
      return "had no effect"
    }
  }
}
