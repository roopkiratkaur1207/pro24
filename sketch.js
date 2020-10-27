
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball;
var binwall1,binwall2,binwal3;
var G;

function preload()
{
	
}

function setup() {
	createCanvas(800, 500);

	engine = Engine.create();
	world = engine.world;

	ball = new paper(100,300,50,50);

	binwall1 = new bin(700,350,25,100);
	binwall2 = new bin(638,380,150,25);
	binwall3 = new bin(560,350,25,100);

	G = new ground(400,400);
 
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
   
  background("black");
  
  ball.display();

  binwall1.display();
  binwall2.display();
  binwall3.display();

  G.display();
  
  drawSprites();
 
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(ball.body,ball.position,{x:85,y:-185});
	}
}

