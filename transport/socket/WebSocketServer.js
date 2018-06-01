var HTTPServer = require("./../http/HTTPServer.js");
var SocketIO = require('socket.io');
var Logger = require("./logger/Logger.js");
var SimpleLogger = require("./logger/SimpleLogger.js");

class WebSocketServer{
    constructor(){
        this.logger = null;
    }

    run(){
        // server socket
        this.socket = new SocketIO(HTTPServer.getServer(), {
            pingInterval: 5000,
            pingTimeout: 5000
        });

        // set the default logger
        this.setLogger(new SimpleLogger());
    }

    start(){
        this.run();
    }

    setLogger(logger){
        if((logger instanceof Logger) == false){
            throw new TypeError("Expected instance of Logger");
        }
        this.logger = logger;

        // register logger on socket.io events
        var self = this;

        // on connection
        this.socket.on('connection', function(socket){
            self.logger.onConnection(socket);
        });
    }

    //Events
    onConnection(closure){
        this.socket.on('connection', closure);

    }

}


module.exports = new WebSocketServer();
