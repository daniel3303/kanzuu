var Matter = require("matter-js");

// module aliases
var World = Matter.World, Bodies = Matter.Bodies;

class Entity{
    constructor(){
        this.world = null;
        this.body = null;
        this.bodyFactory = Bodies;
    }

    addToWorld(world){
        if(this.world != null){
            throw new RuntimeException("Entity already has one world.");
        }

        World.add(world, this.body);
        this.world = world;

        console.log("Entity added to the world");
    }

}

module.exports = Entity;
