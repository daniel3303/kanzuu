var HTTPServer = require("./transport/http/HTTPServer.js");
var WebSocketServer = require("./transport/socket/WebSocketServer.js");
var Game = require("./core/Game.js");

class Application{
    start(){
        HTTPServer.start();
        WebSocketServer.start();
        Game.start();
        console.log("Game started...");
    }
}

module.exports = Application;
