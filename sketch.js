var foodGobbler, foodGobblerImg
var ground, groundImg
var burger,burgerImg
var vegetable,vegetableImg
var fruits,fruitsImg
var salad,Img
var unhealthyFoodGroup
var healthyFoodGroup





function preload(){
  fruitsImg=loadImage("Apple.png");
  burgerImg=loadImage("burger.png");
  saladImg=loadImage("salad.png");
  vegetableImg=loadImage("vegetable.png");
  foodGobblerImg=loadImage("chomp.png");
}

function setup(){
  createCanvas(500,700);

  foodGobbler=createSprite(250,600,50,50)
  ground=createSprite(250,700,500,30)
  unhealthyFoodGroup=createGroup()
  healthyFoodGroup=createGroup()
  foodGobbler.addImage(foodGobblerImg)
  foodGobbler.scale=0.2
}

function draw(){
  background("blue")

  if(keyDown("RIGHT_ARROW")){
    foodGobbler.velocityX=+5;
  }
  if(keyDown("LEFT_ARROW")){
    foodGobbler.velocityX=-5;
  }
  if(foodGobbler.isTouching(unhealthyFoodGroup)){
    foodGobbler.visible=false
    textSize(50)
    fill(rgb(30,80,40))
    text("GAME OVER",100,350)

    unhealthyFoodGroup.setVelocityEach(0,0)
    healthyFoodGroup.setVelocityeach(0,0)
  }
  
   
 
  spawnBadFood();
  spawnGoodFood();
  drawSprites();
}
 


function spawnBadFood(){
  if(frameCount%130==0){
    burger=createSprite(random(20,450),-50);
    burger.velocityY=7;
    burger.addImage(burgerImg);
    unhealthyFoodGroup.add(burger)
    burger.scale=0.3
  }
 
}
function spawnGoodFood(){
  if(frameCount%400==0){
    vegetable=createSprite(random(20,450),-100);
    vegetable.velocityY=4
    vegetable.addImage(vegetableImg)
    healthyFoodGroup.add(vegetable)
    vegetable.scale=0.5
  }
  if(frameCount%500==0){
    salad=createSprite(random(20,450),-100);
    salad.velocityY=6
    healthyFoodGroup.add(salad)
    salad.addImage(saladImg);
    salad.scale=0.2;
  }
  if(frameCount%100==0){
    fruits=createSprite(random(20,450),-70);
    fruits.velocityY=7;
    fruits.addImage(fruitsImg)
    fruits.scale=0.05;
    healthyFoodGroup.add(fruits)
  }
  
}