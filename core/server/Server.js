var Simulation = require("./../logic/Simulation.js");
var WebSocketServer = require("./../../transport/socket/WebSocketServer.js");
var PlayerManager = require("./PlayerManager.js");

// game server class
class Server{
    constructor(){
        this.simulation = new Simulation();
        this.playerManager = new PlayerManager(this.simulation);
        this.socketServer = WebSocketServer;

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

    start(){
        var self = this;
        setInterval(function(){
            self.simulation.step();
        }, 1000/10);
    }
}

module.exports = Server;
