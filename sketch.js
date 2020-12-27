
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage 
var FoodGroup, obstacleGroup, stillani
var score
var time = 0;

var PLAY = 1;
var END = 2;
var gameState = PLAY;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(400,400)
  monkey = createSprite(30,330,20,40)
  monkey.addAnimation("running", monkey_running)
  monkey.scale = 0.1

  ground = createSprite(200,370,400,30)
  ground.x = ground.width/2
  ground.velocityX = -4
  
  FoodGroup = new Group();
  obstacleGroup = new Group();
}


function draw() {
  background("white")
  
  
  stroke("black")
  textSize(20)
  fill("black")
  if(gameState === PLAY){
    time = Math.ceil(frameCount/frameRate())
  }
  
  text("Survival Time: "+ time,100,50)
  
  monkey.collide(ground)
  
  
  if (ground.x < 0){
      ground.x = ground.width/2;
    }
  
  if(keyDown("space") && gameState === PLAY){
    monkey.velocityY = -12
  }
  
  if(obstacleGroup.isTouching(monkey)){
    gameState = END
  }
  
  monkey.velocityY = monkey.velocityY + 0.8
  createbanana();
  createobstacles();
  drawSprites();
}

function createbanana(){
  if(frameCount % 80 === 0 && gameState === PLAY){
    banana = createSprite(400,200,20,20)
    banana.y = Math.round(random(120,200))
    banana.addImage(bananaImage)
  banana.scale = 0.1
    banana.velocityX = -4
   banana.lifetime = 100;
    FoodGroup.add(banana)
  }
}
  
function createobstacles(){
  if(frameCount % 300 === 0 && gameState === PLAY) {
    obstacle = createSprite(400,340,20,20)
    obstacle.addImage(obstacleImage)
  obstacle.scale = 0.1
    obstacle.velocityX = -4
   obstacle.lifetime = 100;
    obstacleGroup.add(obstacle)
  }
}
  








