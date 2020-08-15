var player,player1;
var canvas;
var garden,garden1;
var bushes,bushes1,bushes2,bushes3,bushes4,bushes5,bushes6,bushes7,bushes8;
var flower1,flower11,flower2,flower22,flower3,flower33;
var stones,stones1,stones2,stones3,stones4,stones5;

function preload(){

  garden1 = loadImage("images/garden.png");
  player1 = loadImage("images/player1.png"); 
  bushes1 = loadImage("images/bush.png");
  stones1 = loadImage("images/stone.png");

 

}

function setup(){

  canvas = createCanvas(1200,700);

  garden = createSprite(1200,700,100,100);
  garden.addImage("garden",garden1);
  garden.scale = 5.5;

  bushes = createSprite(300,300,5,5);
  bushes.addImage("bushes",bushes1);
  bushes.scale = 0.2;

  bushes2 = createSprite(600,600,5,5);
  bushes2.addImage("bushes2",bushes1);
  bushes2.scale = 0.2;

  bushes3 = createSprite(700,200,5,5);
  bushes3.addImage("bushes3",bushes1);
  bushes3.scale = 0.2;

  bushes4 = createSprite(100,100,5,5);
  bushes4.addImage("bushes4",bushes1);
  bushes4.scale = 0.2;

  bushes5 = createSprite(1000,100,5,5);
  bushes5.addImage("bushes5",bushes1);
  bushes5.scale = 0.2;

  bushes6 = createSprite(1000,300,5,5);
  bushes6.addImage("bushes6",bushes1);
  bushes6.scale = 0.2;

  bushes7 = createSprite(100,550,5,5);
  bushes7.addImage("bushes7",bushes1);
  bushes7.scale = 0.2;

  bushes8 = createSprite(900,550,5,5);
  bushes8.addImage("bushes8",bushes1);
  bushes8.scale = 0.2;
  
  stones = createSprite(500,300,5,5);
  stones.addImage("stones",stones1);
  stones.scale = 0.1;

  stones2 = createSprite(200,200,5,5);
  stones2.addImage("stones2",stones1);
  stones2.scale = 0.1;

  stones3 = createSprite(800,400,5,5);
  stones3.addImage("stones3",stones1);
  stones3.scale = 0.1;

  stones4 = createSprite(300,500,5,5);
  stones4.addImage("stones4",stones1);
  stones4.scale = 0.1;

  stones5 = createSprite(600,100,5,5);
  stones5.addImage("stones5",stones1);
  stones5.scale = 0.1;

  player = createSprite(600,350,5,5);
  player.addImage("player",player1);
  player.scale = 0.25;
  
 



  

}
function draw(){

 

 
  
 
  drawSprites();




}

function keyPressed(){
  if(keyCode === RIGHT_ARROW){
    player.setSpeed(1.5,0);
  }
  else if(keyCode === LEFT_ARROW){
    player.setSpeed(1.5,180);
  }
  else if(keyCode === DOWN_ARROW){
    player.setSpeed(1.5,90);
  }
  else if(keyCode === UP_ARROW){
    player.setSpeed(1.5,270);
  }
  else if(keyCode === ''){
    player.setSpeed(0,0);
  }
  return false;
}