var HumanEntity = require("./HumanEntity.js");

// Class to describe a player
class Player extends HumanEntity{
    constructor(x, y){
        super();
        this.life = 100;

        this.createBody(x, y);
    }

    createBody(x, y){
        this.body = this.bodyFactory.circle(x, y, 10);

        console.log("Player body created.");
    }
}

module.exports = Player;
