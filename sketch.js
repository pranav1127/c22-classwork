//namespacing for referencing, also called renaming
const Engine= Matter.Engine;
const World= Matter.World;
const Bodies= Matter.Bodies;
var ball;
var engine, world, ground;

function setup() {
  createCanvas(400,400);

  //Engine means Matter.Engine
  engine= Engine.create();

  //within my own physics engine, I am creating my world
  world= engine.world;

  //passing options to create a static rectangle
  var options= {
    isStatic: true
  }

//matter.js has a pre-defined function called rectangle to create a rectangular shape
  //including the variable options in our object creation
  ground= Bodies.rectangle(200,380,400,20, options);
var ball_options={
  restitution:1.3
}

ball=Bodies.circle(200,100,20,ball_options);
  //all bodies are added to the world after creation
  World.add(world, ground);
World.add(world,ball);
  //console.log(object);

  //printing the object type on the console
  //console.log(object.type);
  //console.log(object.position.x);
  //console.log(object.position.y);
  
}

function draw() {
  background(0); 
  //regularly updating the physics engine
  Engine.update(engine);

  rectMode(CENTER);
  //rect(200,200,50,50); 

  //instead of drawing the rectangle at any position, let's draw it at the position of the object
  rect(ground.position.x,ground.position.y,400,20);
  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,20);
  drawSprites();
}