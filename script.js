class Character {
    constructor(name){
        this.name = name;
        this.health = 100;
        this.inventory = [];
    }
    roll (mod = 0) {
        const result = Math.floor(Math.random() * 20) + 1 + mod;
        console.log(`${this.name} rolled a ${result}.`)
    }

}

class Adventurer extends Character {
    constructor (name, role, lv){
        super(name);
        this.role = role;
        this.level = lv;
        this.inventory.push("bedroll", "50 gold coins");
    }

    scout () {
        console.log(`${this.name} is scouting ahead...`);
        super.roll();
    }
}
class Companion extends Character{
    constructor(name, type){
        super(name);
        this.type = type;
    }
}
const robin = new Adventurer("Robin");
robin.inventory = ["sword", "potion", "artifact"];
robin.companion = new Character("Leo");
robin.companion.type = "Cat";
robin.companion.companion = new Character("Frank");
robin.companion.companion.type = "Flea";
robin.companion.companion.inventory = ["small hat", "sunglasses"];

console.log(robin);