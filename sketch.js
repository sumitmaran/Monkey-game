var PLAY = 1;
var END = 0;
var gameState = PLAY;
var monkey , monkey_running,monkeycollide;
var banana ,bananaImage, obstacle, obstacleImage;
var FoodGroup, obstacleGroup;
var ground,ground;
var survivalTime;
var Score;
var gameover;


function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png");
  monkeycollide=loadAnimation("sprite_0.png");
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");

}



function setup() {
  createCanvas(600,400); 

  monkey=createSprite(100,310,20,10);
  monkey.addAnimation("monkey",monkey_running);
  monkey.scale=0.1;
  FoodGroup=createGroup();
  obstacleGroup=createGroup();
  
  ground=createSprite(300,340,600,10);
  ground.x = ground.width /2;
 

  Score=0;
  survivalTime=0;
}


function draw() {
background("lightblue")
  
  
  stroke("white");
  textSize(20);
  fill("white");
  text("Score:"+ Score,400,50);
  
   stroke("black");
  textSize(20);
  fill("black");
  text("SurvivalTime:"+ survivalTime,100,50);
  
  if(gameState===PLAY){ 
    
    survivalTime = survivalTime + Math.round(frameCount/60);
  
  if(keyDown("space")){
    monkey.velocityY = -10;
  }
  
  if(monkey.isTouching(FoodGroup)){
    FoodGroup.destroyEach();
    Score=Score+2;
  }
  
  if(monkey.isTouching(obstacleGroup)){
    gameState = END;
    
 
    
  }
  
  if (ground.x < 0){
      ground.x = ground.width/2;
    }
  
  monkey.velocityY=monkey.velocityY+0.8;
  monkey.collide(ground);
 
  
  //call objects
  Food();
  obstacle();
 
  
    }
  
 else if(gameState===END){
      monkey.collide(ground);
 obstacleGroup.setVelocityXEach(0);
   FoodGroup.setVelocityXEach(0);
   
  obstacleGroup.setLifetimeEach  (-1);
  FoodGroup.setLifetimeEach  (-1);
fill("red");
    stroke("red");
    textSize(40);
    text("GameOver",200,200);
  
  
  }
  
  drawSprites();
}

function Food(){
 if(frameCount%80===0){
   banana=createSprite(390,300,50,50);
   banana.y=Math.round(random(200,250));
   banana.addImage(bananaImage);
   banana.scale=0.05;
   banana.velocityX=-5;
   banana.lifetime=100;
   
   
  FoodGroup.add(banana);

 }
 }



function obstacle(){
 
 if(frameCount%100===0){
  rock=createSprite(600,310,20,20);
  rock.addImage(obstacleImage);
  rock.scale=0.15;
  rock.velocityX=-5;
  rock.lifetime=200;
   
  obstacleGroup.add(rock);

 }
 }











































































































































