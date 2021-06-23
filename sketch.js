
const Engine = Matter.Engine;
const World = Matter.World;
const Body = Matter.Body;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;


var engine,world;

function setup(){

	createCanvas(1350,500);

	engine = Engine.create();
  world = engine.world;

	ground1 = new Ground(900,380,200,10);
	ground2 = new Ground(400,300,300,10);
  Ground = new Ground(0,500,3000,30);

  hex = new Hexagon(650,200,30)
  

  sling = new Slingshot(hex.body, {x:100,y:200})


  box1 = new Box(480,275,30,40);
  box2 = new Box(450,275,30,40);
  box3 = new Box(420,275,30,40);
  box4 = new Box(390,275,30,40);
  box5 = new Box(360,275,30,40);
  box6 = new Box(330,275,30,40);
  box7 = new Box(300,275,30,40);
  box8 = new Box(330,235,30,40);
  box9 = new Box(360,235,30,40);
  box10 = new Box(390,235,30,40);
  box11 = new Box(420,235,30,40);
  box12 = new Box(450,235,30,40);
  box13 = new Box(360,195,30,40);
  box14 = new Box(390,195,30,40);
  box15 = new Box(420,195,30,40);
  box16 = new Box(390,155,30,40);

  b1 = new Box(900,275,30,40);
  b2 = new Box(900,315,30,40);
  b3 = new Box(870,315,30,40);
  b4 = new Box(930,315,30,40);
  b5 = new Box(900,355,30,40);
  b6 = new Box(870,355,30,40);
  b7 = new Box(840,355,30,40);
  b8 = new Box(930,355,30,40);
  b9 = new Box(960,355,30,40);



}

function draw(){
	background("pink");
	
  Engine.update(engine);

  textSize(20);
  fill("yellow");
  text("Drag the polygon to destroy the blocks",50,450);
  textSize(20);
  text("Press Space to get a second Chance to Play!",900 ,450);

  
  Ground.display();
  ground2.display();
  ground1.display();
  


  hex.display();
  fill("skyblue");
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  box10.display();
  box11.display();
  box12.display();
  box13.display();
  box14.display();
  box15.display();
  box16.display();
 

  b1.display();
  b2.display();
  b3.display();
  b4.display();
  b5.display();
  b6.display();
  b7.display();
  b8.display();
  b9.display();

  sling.display();
}

function keyPressed(){
  if(keyCode === 32){
    sling.attach(hex.body);
  }
}

function mouseDragged(){
  Matter.Body.setPosition(hex.body, {x:mouseX , y:mouseY})
}

function mouseReleased(){
  sling.fly();
}
