const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var canvas;
var player, playerBase, playerArcher;
var baseimage;
var playerImg,player2Img,player3Img;
var archerTarget,targetImg;

function preload() {
  backgroundImg = loadImage("./assets/background.png");
  baseimage = loadImage("./assets/base.png");
  
  playerImg = loadImage("./assets/archer.png")
  player2Img = loadImage("./assets/archer3.png");

  targetImg = loadImage("./assets/board.png")

  
  
  
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);

  engine = Engine.create();
  world = engine.world;
  angleMode(DEGREES);

  var player_options={
    isStatic:true
  }
  
  player = Bodies.rectangle(400,15,450,700,player_options);

  var playerBase_options={
    isStatic:true
  }
  playerBase = Bodies.rectangle(350,670,400,200,playerBase_options);

  var target_options={
   isStatic:true
  }
   
  archerTarget = Bodies.rectangle(2000,100,500,500,target_options)

  //create player body



}

function draw() {
  background(backgroundImg);
  image(player2Img,player.position.x,player.position.y,450,700)
  image(baseimage,playerBase.position.x,playerBase.position.y,400,250)
  image(targetImg,archerTarget.position.x,archerTarget.position.y,500,500)
  //show the player image using image() function

  //show the playerbase image using image() function


  Engine.update(engine);

  // Title
  fill("black");
  stroke("gold");
  strokeWeight(20)
  textAlign("center");
  textSize(150);
  text("EPIC ARCHERY", width / 2+100, 150);
}
