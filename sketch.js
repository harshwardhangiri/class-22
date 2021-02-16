const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
var engine,world;
var ball,ground;
function setup() {
  var Canvas = createCanvas(800,400);
  engine = Engine.create();
  world=engine.world;
  var groundoption = {
    isStatic:true
  }
  ground=Bodies.rectangle(400,380,800,20,groundoption);
  World.add(world,ground);
  var balloption={
   restitution:1.000
  }
  ball=Bodies.circle(400,200,10,balloption);
  World.add(world,ball);
  console.log(ground);
 
 
  
}
function draw() {
  background(245,3,155);  
  Engine.update(engine);
  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,800,20);
  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,10);


}


