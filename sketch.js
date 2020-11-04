
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var world, engine;
var bob1,bob2,bob3,bob4,bob5,bob6;
var roof;
var rope1,rope2,rope3,rope4,rope5,rope6;

function preload()
{
	
}

function setup() {
	createCanvas(1600, 500);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	roof = new Roof(400,100,500,30);

	bobDiameter = 60;

	bob1 = new Bob(240,400,60);
	bob2 = new Bob(310,400,60);
	bob3 = new Bob(380,400,60);
	bob4 = new Bob(450,400,60);
	bob5 = new Bob(520,400,60);
	bob6 = new Bob(590,400,60);

	rope1 = new Rope(bob1.body,roof.body,-bobDiameter*2.5,0);
	rope2 = new Rope(bob2.body,roof.body,-bobDiameter*1.5,0);
	rope3 = new Rope(bob3.body,roof.body,-bobDiameter*0.4,0);
	rope4 = new Rope(bob4.body,roof.body,-bobDiameter*-0.7,0);
	rope5 = new Rope(bob5.body,roof.body,-bobDiameter*-2,0);
	rope6 = new Rope(bob6.body,roof.body,-bobDiameter*-3.2,0);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  roof.display();

  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  bob6.display();

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  rope6.display();
  
  //keyPressed();
  drawSprites();
 
}

function mouseDragged(){
	Matter.Body.setPosition(bob6.body,{x:mouseX, y:mouseY})
}

