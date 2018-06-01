var Matter = require("matter-js");

class CompositeSerializer{
    constructor(world){
        this.world = world;
    }

    serialize(){
        return null;
    }

}

module.exports = CompositeSerializer;
