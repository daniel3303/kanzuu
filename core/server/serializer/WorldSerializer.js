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
        var out = {};

        out.bodies = bodySerializer.serialize();
        out.constraits = constraitSerializer.serialize();
        out.composites = constraitSerializer.serialize();
        out.gravity = world.gravity;
        
        return out;
    }
}


module.exports = WorldSerializer;
