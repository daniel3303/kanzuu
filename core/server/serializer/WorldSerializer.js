var Matter = require("matter-js");
var BodySerializer = require("./BodySerializer.js");
var ConstraintSerializer = require("./ConstraintSerializer.js");
var CompositeSerializer = require("./CompositeSerializer.js");

class WorldSerializer{
    constructor(world){
        if(world == null){
            throw new TypeError("Invalid world.");
        }

        this.world = world;

        // sub serializers
        this.bodySerializer = new BodySerializer(world);
        this.constraitSerializer = new ConstraintSerializer(world);
        this.compositeSerializer = new CompositeSerializer(world);
    }

    serialize(){
        var update = {};
        var world = {};

        var out = {
            create: new Array(),
            update: update,
            remove: new Array(),
            world: world
        };

        // entities to update
        update.bodies = this.bodySerializer.serialize();
        update.constraits = this.constraitSerializer.serialize();
        update.composites = this.constraitSerializer.serialize();

        // world settings
        world.gravity = this.world.gravity;
        
        return out;
    }
}


module.exports = WorldSerializer;
