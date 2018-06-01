var Player = require("./../../logic/entity/Player.js");

class PlayerController {
    constructor(player, socket){
        this.targetEntity = player;
        this.socket = socket;

        this.registerEventListeners();
    }

    registerEventListeners(){

    }
}

module.exports = PlayerController;
