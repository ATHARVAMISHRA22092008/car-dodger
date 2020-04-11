var canvas, backgroundImage;
var oppositon1;
var opposition2;
var opposition1img;
var opposition2img;
var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;
var life=5;

var form, player, game;

var cars, car1, car2, car3, car4;

var track, car1_img, car2_img, car3_img, car4_img;

function preload(){
  track = loadImage("../images/track.jpg");
  car1_img = loadImage("../images/car1.png");
  car2_img = loadImage("../images/car2.png");
  car3_img = loadImage("../images/car3.png");
  car4_img = loadImage("../images/car4.png");
  ground = loadImage("../images/ground.png");
  opposition2img=loadImage("../images/car2.png");
  opposition1img=loadImage("../images/car4.png");
}

function setup(){
  canvas = createCanvas(displayWidth - 20, displayHeight-30);
  game = new Game();
  game.start();
}


function draw(){
  if(playerCount === 4){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }
  if(gameState === 2){
    game.end();
  }
  opposition2.velocityY=5
  oppositon1.velocityY=5
  if(opposition2.y=car3.y){
    opposition2.y=displayHeight-30
  }
  if(opposition1.y=car3.y){
    opposition1.y=displayHeight-30
  }
  if(car1.isTouching(opposition2||oppositon1)){
    life = life-1;
  }
  if(gameState="end"){
    car1.destroy();
    car2.destroy();
    car3.destroy();
    car4.destroy();
    oppositon1.destroy();
    opposition2.destroy();
    track.destroy();
    background("red");
    Text("GAME OVER, NO LIFE LEFT")
  }
  if(life=0){
    gameState="end"
  }
}
