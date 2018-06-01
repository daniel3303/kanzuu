var Simulation = require("./../logic/Simulation.js");
var WebSocketServer = require("./../../transport/socket/WebSocketServer.js");
var PlayerManager = require("./PlayerManager.js");
var WorldSerializer = require("./serializer/WorldSerializer.js");

// game server class
class Server{
    constructor(){
        this.simulation = new Simulation();
        this.playerManager = new PlayerManager(this.simulation);
        this.socketServer = WebSocketServer;
        this.serializer = new WorldSerializer(this.simulation.getWorld());

        this.registerEventListeners();
        this.start();
    }

    registerEventListeners(){
        var self = this;

        // on connection
        this.socketServer.onConnection(function(socket){
            self.onConnection(socket);
        });
    }

    onConnection(socket){
        this.playerManager.createPlayer(socket);
    }

    // broadcasts the world state to all connected players
    broadcast(){
        var worldData = this.serializer.serialize();

        this.playerManager.forEach(function(player){
            player.sendWorldUpdate(worldData);
        });
    }

    start(){
        var self = this;
        setInterval(function(){
            self.simulation.step();
            self.broadcast();
        }, 1000/10);
    }
}

module.exports = Server;
