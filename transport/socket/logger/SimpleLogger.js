var Logger = require("./Logger.js");

// Simple logger class
class SimpleLogger extends Logger {
    constructor(){
        super();
    }

    onConnection(socket){
        super.onConnection(socket);
        console.log("New websocket connection: "+socket.id);
    }

    onDisconnection(socket){
        console.log("Disconnected: "+socket.id);
    }
}

module.exports = SimpleLogger;
