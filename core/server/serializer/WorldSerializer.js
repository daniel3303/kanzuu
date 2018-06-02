var Matter = require("matter-js");
var BodySerializer = require("./BodySerializer.js");

class WorldSerializer{
    constructor(world){
        if(world == null){
            throw new TypeError("Invalid world.");
        }

        this.world = world;

        // sub serializers
        this.entitySerializer = new EntitySerializer(this.world);
    }

    serialize(){
        var world = {};
        var entity = this.entitySerializer.serialize();

        var out = {
            entity: entity,
            world: world
        };

        // world settings
        world.gravity = this.world.gravity;

        return out;
    }
}


module.exports = WorldSerializer;
