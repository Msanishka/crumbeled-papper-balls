
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball;
function preload()
{
	
}

function setup() {
	createCanvas(1500, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
   var ball_options={
	   isStatic:false ,
	   restitution:0.3 ,
	   friction:0 ,
	   density:1.2
   }

   leftSide = new Ground(width/2,670,width,20) ;
    ground = new Ground(1100,600,20,120) ;
	rightSide = new Ground(950,600,20,120) ;
	ball = Bodies.circle (150,150,20,ball_options) ;
	World.add (world,ball) ;
	 //Engine.run(engine);
	ellipseMode(RADIUS);
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  ground.show() ;
  leftSide.show() ;
  rightSide.show() ;
  ellipse (ball.position.x,ball.position.y,20,20) ;
  drawSprites();
  Engine.update(engine);

}
 
function keyPressed () {
  if (keyCode === UP_ARROW) {
	Matter.Body.applyForce (ball,ball.position,{x:75,y:-85})

  }

}



