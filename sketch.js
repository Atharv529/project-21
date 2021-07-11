
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground1;


function setup() {
	createCanvas(1500,700);

	engine = Engine.create();
	world = engine.world;

	ground1 = new Ground (1200,500,20,60);


	Engine.run(engine);
  
	
}


function draw() {
rectMode(CENTER);
  background(0);
 

  ground1.show();
}



