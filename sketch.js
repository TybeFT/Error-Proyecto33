const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine;
var world;

var ground;
var obs1;
var player;

function setup() {
  createCanvas(1500,700);

  engine = Engine.create();
  world = engine.world;

  //Player (bola)
  player = new Jugador(750, 100);

  //Suelo
  //ground = new Ground(750,690);


  
}

function draw() {
  background("black");  

  Engine.update(engine);

  //ground.display();

  player.display();
}