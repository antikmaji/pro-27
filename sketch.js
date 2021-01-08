
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	bobObject1= new Bob(340,350,30);
	bobObject2= new Bob(370,350,30);
	bobObject3= new Bob(400,350,30);
	bobObject4= new Bob(430,350,30);
	bobObject5= new Bob(460,350,30);

	roof=new Roof(400,250,100,20);

	chain1=new Chain(bobObject1.body,roof.body,-30*2,0);
	chain2=new Chain(bobObject2.body,roof.body,-30*1,0);
	chain3=new Chain(bobObject3.body,roof.body,30,0);
	chain4=new Chain(bobObject4.body,roof.body,30*1,0);
	chain5=new Chain(bobObject5.body,roof.body,30*2,0);

	Engine.run(engine);
  
}


function draw() {

  rectMode(CENTER);

  background("white");
  
  drawSprites();

	bobObject1.display();
	bobObject2.display();
	bobObject3.display();
	bobObject4.display();
	bobObject5.display();

	chain1.display();
	chain2.display();
	chain3.display();
	chain4.display();
	chain5.display();

	roof.display();
}

function keyPressed() {
	if(keyCode===UP_ARROW) {

		Matter.Body.applyForce(bobObject1.body,bobObject1.body.position, {x:-65,y:65});

	}
   }	

