var Matter = require("matter-js");

// module aliases
var World = Matter.World, Bodies = Matter.Bodies, Composite = Matter.Composite;

class Entity{
    constructor(){
        this.world = null;
        this.body = Composite.create();
        this.body.entity = this;
    }

    addToWorld(world){
        if(this.world != null){
            throw new RuntimeException("Entity already has one world.");
        }

        World.add(world, this.body);
        this.world = world;

        console.log("Entity added to the world");
    }

    getName(){
        return this.constructor.name;
    }

}

module.exports = Entity;
