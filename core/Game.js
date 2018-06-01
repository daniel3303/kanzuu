var Server = require("./server/Server.js");

class Game{
    start(){
        var self = this;
        this.server = new Server();
    }
}


// game singleton
module.exports = new Game();
