const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var umbrella1;
var maxDrops=100;
var drops=[]
function preload(){
    
}

function setup(){
    createCanvas(500,700);
    engine = Engine.create();
    world = engine.world;  
    
    

    umbrella1 = new umbrella(200,500);
   
}

function draw(){
    background(0);
    Engine.update(engine);

    umbrella1.display();

    for(var i=0;i<maxDrops; i++){
        drops.push(new Drops(random(0,400),random(0,400)))

    }
}   

