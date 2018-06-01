var Express = require('express');
var HTTP = require('http');
var Path = require('path');
var SocketIO = require('socket.io');


class HTTPServer{
    constructor(port = 80){
        this.port = port;
        this.app = new Express();
        this.server = HTTP.createServer(this.app);
    }

    bind(){
        this.app.use('/', Express.static(__dirname +  '/../../web'));

        //Routing
        this.app.get('/', function(request, response) {
            response.sendFile(path.join(__dirname, '/../../web/index.html'));
        });
    }

    run(){
        var self = this;
        this.server.listen(this.port, function(){
            console.log("Server running at port "+self.port+".");
        });
    }

    start(){
        this.bind();
        this.run();
    }

    getServer(){
        return this.server;
    }

}


module.exports = new HTTPServer();
