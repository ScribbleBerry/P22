const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground;
var bag;
var helicopter;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;
    bag = Bodies.rectangle(200, 100, 10, 10, bag_options);
    var bag_options={
    bag.isStatic = false; 
    }
    helicopter = Bodies.rectangle(200, 100, 100 , 100, helicopter_options)
    
    var ground_options ={
        isStatic: false;
     }
    var gelicopter_options ={
       isStatic: true;
    }

    ground = Bodies.rectangle(200,390,200,20,ground_options);
    World.add(world,ground);

    console.log(ground);
}

function draw(){
    background(255);
    Engine.update(engine);
    rectMode(CENTER);
    rect(ground.position.x,ground.position.y,400,20);
    drawBodies();
}