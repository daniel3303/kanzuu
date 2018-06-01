var Matter = require("matter-js");

// module aliases
var World = Matter.World;

class Entity{
    constructor(){
        this.world = null;
        this.body = null;
    }

    addToWorld(world){
        if(this.world != null){
            throw new RuntimeException("Entity already has one world.");
        }

        World.add(world, this.body);
        this.world = world;
    }

}

module.exports = Entity;
