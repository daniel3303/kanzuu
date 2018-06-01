// Class to describe a player
class Player extends HumanEntity{
    constructor(x, y){
        super();
        this.socket = socket;
        this.life = 100;

        this.createBody(x, y);
    }

    createBody(x, y){
        this.bodyFactory.circle(x, y, 10);

        console.log("Player created.");
    }
}

module.exports = Player;
