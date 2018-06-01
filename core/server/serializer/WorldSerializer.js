var Matter = require("matter-js");


class WorldSerializer{
    constructor(world){
        if(world instanceof Matter.World == false || world == null){
            throw new TypeError("Invalid world.");
        }
        this.world = world;
    }

    function serialize(){
        return {};
    }
}


module.exports = WorldSerializer;
