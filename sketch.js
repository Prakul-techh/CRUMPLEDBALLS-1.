
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper,ground;
var box1,box2,box3;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	paper=new Paper(200,100,30);
	box1=new Box(160,370,20,100);
    box2=new Box(200,20,200,20);
	box3=new Box(240,370,20,100);
	ground = new Ground(600,height,1200,20)
	Engine.run(engine);
	
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  //drawSprites();

  paper.display();
  box1.display();
  box2.display();
  box3.display();
  ground.display();
}

function keyPressed(){
if(keyCode===UP_ARROW){

	Matter.Body.applyForce(paper.body,paper.body.position,{x:85,y:-85});
}

}



