
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var tr,b,bo,st,m,m2,m3,m4,m5,m6,m7,chai,t,be,b1;
function preload()
{
	bo=loadImage("boy.png");
  tr=loadImage("tree.png");
  
}

function setup() {
	createCanvas(800, 700);
  be=createSprite(170,600,200,300);
  be.addImage(bo);
  be.scale=0.12;
  t=createSprite(540,400,500,600);
  t.addImage(tr);
  t.scale=0.47;

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	
	b= new Ground(400,680,800,10);
	st=new Stone(110,530,70,70);
	m=new Mango(600,160,60,60);
	m2=new Mango(480,200,65,65);
	m3=new Mango(590,280,55,55);
	m4=new Mango(700,230,65,65);
	m5=new Mango(750,350,70,70);
	m6=new Mango(500,370,55,55);
	m7=new Mango(380,310,60,60);
	chai=new Chain(st.body,{x:110,y:530});
	Engine.run(engine);
  
}


function draw() {
  Engine.update(engine);
  rectMode(CENTER);
  background("White");
  b.display();
  drawSprites();
  st.display();
  m.display();
  m2.display();
  m3.display();
  m4.display();
  m5.display();
  m6.display();
  m7.display();
  chai.display();
  detectcollision(m,st);
  detectcollision(m2,st);
  detectcollision(m3,st);
  detectcollision(m4,st);
  detectcollision(m5,st);
  detectcollision(m6,st);
  detectcollision(m7,st);
  

 
}
function mouseDragged(){
    Matter.Body.setPosition(st.body,{x:mouseX,y:mouseY});
}

function mouseReleased(){
    chai.fly();
}
function detectcollision(lmango,lstone) {
  mangoBodyPosition=lmango.body.position
  stoneBodyPosition=lstone.body.position

  var distance= dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y);
    if(distance<=lmango.r+lstone.r){
      Matter.Body.setStatic(lmango.body,false);
    }

}
function keyPressed(){
  if(keyCode===32){
    Matter.Body.setPosition(st.body,{x:110,y:530});
    chai.attach(st.body);
  }
}

