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
    createPlayer(conn){
        conn.emit("login", true);
        console.log("Player created.");
    }



}

module.exports = PlayerManager;
