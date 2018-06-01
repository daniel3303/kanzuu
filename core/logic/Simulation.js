var Matter = require("matter-js");
var Player = require("./entity/Player.js");

// module aliases
var Engine = Matter.Engine,
    World = Matter.World,
    Bodies = Matter.Bodies;

class Simulation{
    constructor(){
        this.setupWorld();
    }

    setupWorld(){
        // create an engine
        this.engine = Engine.create();
        this.world = this.engine.world; // world alias

        // create two boxes and a ground
        var boxA = Bodies.rectangle(400, 200, 80, 80);
        var boxB = Bodies.rectangle(450, 50, 80, 80);
        var ground = Bodies.rectangle(400, 610, 810, 60, { isStatic: true });

        // add all of the bodies to the world
        World.add(this.world, [boxA, boxB, ground]);

        // run the engine
        Engine.run(this.engine);

        // set the last update time
        this.lastUpdate = new Date().getTime();
    }

    step(){
        var lastUpdate = this.lastUpdate;
        var now = new Date().getTime();
        var delta = now - lastUpdate;

        //FIXME use time correction

        Engine.update(this.engine, delta);

        this.lastUpdate = now;
    }

    createPlayer(){
        var player = new Player(100, 100);
        player.addToWorld(this.world);

        return player;
    }

    getWorld(){
        return this.world;
    }

}

module.exports = Simulation;
