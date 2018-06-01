var PlayerController = require("./controller/PlayerController.js");

class PlayerManager{
    constructor(simulation){
        this.simulation = simulation;
        this.players = {};
    }

    // returns a players by id (socket id). return null if the player does not exists
    getPlayer(id){
        if(this.players.hasOwnProperty(id) == true){
            return this.players[id];
        }
        return null;
    }

    // returns true is a player with a given id exists
    playerExists(id){
        return (this.players.hasOwnProperty(id) == true);
    }

    // creates a player for a connection (socket)
    createPlayer(socket){
        socket.emit("login", true);
        var playerEntity = this.simulation.createPlayer();
        var player = new PlayerController(playerEntity, socket);
        this.players[socket.id] = player;

        this.sendWorldInitData(player);
        this.broadcastNewPlayer(player);
    }

    // executes a callback for each players
    forEach(closure){
        for(var id in this.players) {
            closure(this.players[id]);
        }
    }

    broadcastNewPlayer(player){
        console.log("Implement broadcastNewPlayer.");
    }

    sendWorldInitData(){
        
    }



}

module.exports = PlayerManager;
