var Matter = require("matter-js");

class CompositeSerializer{
    constructor(world){
        this.world = world;
    }

    serialize(){
        return new Array();
    }

}

module.exports = CompositeSerializer;
