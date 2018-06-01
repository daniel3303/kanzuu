var Matter = require("matter-js");

class BodySerializer{
    constructor(world){
        this.world = world;
    }

    serialize(){
        var out = new Array();

        // for each body
        for(var index = 0; index < this.world.bodies.length; index++){
            var body = this.world.bodies[index];
            var bodyDTO = {};

            bodyDTO.id              = body.id;
            bodyDTO.position        = body.position;
            bodyDTO.force           = body.force;
            bodyDTO.torque          = body.torque;
            bodyDTO.speed           = body.speed;
            bodyDTO.angularSpeed    = body.angularSpeed;
            bodyDTO.velocity        = body.velocity;
            bodyDTO.angularVelocity = body.angularVelocity;
            bodyDTO.motion          = body.motion;
            bodyDTO.density         = body.density;

            out.push(bodyDTO);
        }

        return out;
    }


}

module.exports = BodySerializer;
