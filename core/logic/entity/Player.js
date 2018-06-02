var HumanEntity = require("./HumanEntity.js");
var Matter = require("matter-js");

// module aliases
var Bodies = Matter.Bodies, Composite = Matter.Composite;

// Class to describe a player
class Player extends HumanEntity{
    constructor(x, y){
        super();
        this.life = 100;

        this.createBody(x, y);
    }

    createBody(x, y){
        Composite.add(this.body, Bodies.circle(x, y, 10));
        console.log("Player body created.");
    }
}

module.exports = Player;
