
const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;

var myengine,myworld
var ground,ball
var box


function setup(){
  var canvas=createCanvas(400,400);


myengine=Engine.create();
myworld=myengine.world;

ground= new Ground(200,390,400,20)
box=new Box(200,100,100,70)
box1=new Box(240,50,50,100)



}
function draw(){
  background(0);
  Engine.update(myengine)
    box.display();
    ground.display();
    box1.display();
    
}