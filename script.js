class Character {
  static MAX_HEALTH = 100;
  constructor(name) {
    this.name = name;
    this.health = 100;
    this.inventory = [];
  }
  roll(mod = 0) {
    const result = Math.floor(Math.random() * 20) + 1 + mod;
    console.log(`${this.name} rolled a ${result}.`);
  }
}

class Adventurer extends Character {
  static ROLES = ["fighter", "healer", "wizard", "tank", "assassin"];
  constructor(name, role, lv = 1) {
    super(name);
    try {
      if (Adventurer.ROLES.includes(role.toLowerCase())) {
        this.role = role;
      } else {
        throw `Not a valid class. Pick one of the following: ${Adventurer.ROLES}`;
      }
    } catch (e) {
      console.log(e);
    }
    this.level = lv;
    this.inventory.push("bedroll", "50 gold coins");
  }

  scout() {
    console.log(`${this.name} is scouting ahead...`);
    super.roll();
  }
}
class Companion extends Character {
  constructor(name, type) {
    super(name);
    this.type = type;
  }
}
const robin = new Adventurer("Robin", "car");
robin.inventory = ["sword", "potion", "artifact"];
robin.companion = new Companion("Leo", "Cat");
robin.companion.companion = new Companion("Frank", "Flea");
robin.companion.companion.inventory = ["small hat", "sunglasses"];

console.log(robin);
