class Character {
    constructor(name){
        this.name = name;
        this.health = 100;
        this.inventory = [];
    }
}

// Part 1: Humble Beginnings
const adventurer = {
    name: "Robin",
    health: 10,
    inventory: ["sword", "potion", "artifact"],
    companion: {
        name: "Leo",
        type: "Cat",
        subCompanion: {
            name: "Frank",
            type: "Flea"
        }
    },
    roll (mod = 0) {
        const result = Math.floor(Math.random() * 20) + 1 + mod;
        console.log(`${this.name} rolled a ${result}.`)
        }
}

// print items in inventory
adventurer.inventory.forEach(item => console.log(item));

adventurer.roll();