var Matter = require("matter-js");

class BodySerializer{
    constructor(){
    }

    serialize(bodies){
        var out = new Array();

        // for each body
        for(var index = 0; index < bodies.length; index++){
            var body = bodies[index];
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
