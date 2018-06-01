var Player = require("./../../logic/entity/Player.js");

class PlayerController {
    constructor(player, socket){
        this.targetEntity = player;
        this.socket = socket;

        this.registerEventListeners();
    }

    registerEventListeners(){

    }

    sendWorldUpdate(data){
        this.socket.emit("update", data);
    }

    getSocket(){
        return this.socket;
    }
}

module.exports = PlayerController;
