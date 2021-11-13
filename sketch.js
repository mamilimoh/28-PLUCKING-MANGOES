
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render=Matter.Render;
const Constraint = Matter.Constraint;

var tree, ground, stone, boy
var mango1, mango2, mango3, mango4, mango5, mango6, mango7, mango8, mango9, mango10
var launcherObject
var launchForce =100
function preload()
{
boy=loadImage("images/boy.png")
}

function setup() {
	createCanvas(1200, 600);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	tree = new Tree(1050,580)
	ground = new Ground(width/2,600,width,60)
	stone = new Stone(235,420,30)
	//boy = new Boy(200,450,250,250)

	mango1 = new Mango(900,220,50)
	mango2 = new Mango(850,180,60)
	mango3 = new Mango(920,100,60)
	mango4 = new Mango(1030,180,50)
	mango5 = new Mango(750,220,70)
	mango6 = new Mango(820,270,60)
	mango7 = new Mango(960,160,80)
	mango8 = new Mango(820,120,50)
	mango9 = new Mango(970,255,60)
	mango10 = new Mango(1100,240,70)

	launcher = new Launcher(stone.body,{x:235,y:420})

	Engine.run(engine);
  
}

function keyPressed(){
  if(keyCode===32){
    Matter.Body.setPosition(stone.body, {x:110,y:400})
    launcherObject.attach(stone.body);
  }
}

function draw() {
  //rectMode(CENTER);
  background('grey');
  Engine.update(engine);
  textSize(25);
  text("Hit the mangoes with the stone!!",50 ,50);
  image(boy ,200,340,200,300)

  tree.display()
  ground.display()
  //boy.display()
  stone.display()

  mango1.display()
  mango2.display()
  mango3.display()
  mango4.display()
  mango5.display()
  mango6.display()
  mango7.display()
  mango8.display()
  mango9.display()
  mango10.display()

  launcher.display()

  detectollision(stone,mango1);
  detectollision(stone,mango2);
  detectollision(stone,mango3);
  detectollision(stone,mango4);
  detectollision(stone,mango5);
  detectollision(stone,mango6);
  detectollision(stone,mango7);
  detectollision(stone,mango8);
  detectollision(stone,mango9);
  detectollision(stone,mango10);

  //drawSprites();
 
}

function mouseDragged(){
    Matter.Body.setPosition(stone.body, {x: mouseX , y: mouseY});
}

function mouseReleased(){
    launcher.fly();
}

function detectollision(lstone,lmango){
  mangoBodyPosition = lmango.body.position
  stoneBodyPosition = lstone.body.position

  var distance = dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y)
  if(distance<=lmango.r+lstone.r){
    Matter.Body.setStatic(lmango.body,false)
  }
}