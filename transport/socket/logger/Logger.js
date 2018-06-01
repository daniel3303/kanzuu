//Abstract logger class

class Logger{
    constructor(){
        if (new.target === Logger) {
            throw new TypeError("Cannot construct Abstract instances directly");
        }
    }

    onConnection(socket){
        var self = this;
        socket.on("disconnect", function(){
            self.onDisconnection(socket);
        });
    }

    onDisconnection(socket){
        console.log("New disconnection.");
    }
}


module.exports = Logger;
