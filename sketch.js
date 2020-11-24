var dustbin1
var ground
var paperball
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;

	dustbin1 = new Dustbin(1200,650);
	ground1 = new Ground(800, 675, 1600, 10)
	paperball = new paper(200,450,40)
	
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  dustbin1.display();
  ground1.display();
  paperball.display();
 
}
function keyPressed() {
	if (keyCode === UP_ARROW){

		Matter.Body.applyForce(paperball.body,paperball.body.position,{x:85,y:-85})
	}
}



