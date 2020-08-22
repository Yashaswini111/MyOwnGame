var car;
var select;
var ground, groundImg;


function preload()
{
 groundImg = loadImage("ground2.png");
}

function setup()
{
  createCanvas(670,600);
  ground = createSprite(250,300,400,70);
  ground.addImage(groundImg);
  ground.x =  ground.width/2
  ground.velocityX = -10;

  car = createSprite(200,450,90,30);
}

function draw()
{
  background("yellow");
  
  if(ground.x < 0)
  {
     ground.x = ground.width/2;
  }
  if(frameCount%100 === 0)
  {
    select = Math.round(random(1,4));
    car.shapeColor = random(1,4);

    if(select === 1)
    {
      car.shapeColor = "red";
    }
    else if(select === 2)
    {
      car.shapeColor = "blue";
    }
    else if(select === 3)
    {
      car.shapeColor = "yellow";
    }
    else if(select === 4)
    {
      car.shapeColor = "orange";
    }

  }

  if(keyDown(UP_ARROW))
  {
    car.velocityY = -3;
  }
  else if(keyDown(DOWN_ARROW))
  {
    car.velocityY = 3;
  }
  else
  {
    car.velocityY = 0;
  }

 wall();
  drawSprites()
}

function wall()
{
  
  if(frameCount%200 === 0)
  {
    var wall1 = createSprite(670,390,50,60);
    wall1.velocityX = -2;
    wall1.lifetime = 345;
    var wall2 = createSprite(670,450,50,60);
    wall2.velocityX = -2;
    wall2.lifetime = 345;
    var  wall3 = createSprite(670,510,50,60);
    wall3.velocityX = -2;
    wall3.lifetime = 345;
    var wall4 = createSprite(670,570,50,60);
    wall4.velocityX = -2;
    wall4.lifetime = 345;

if(select === 1)
{
 wall1.shapeColor = "orange";
 wall2.shapeColor = "red";
 wall3.shapeColor = "blue";
 wall4.shapeColor = "yellow";
}
else if(select === 2)
{
wall1.shapeColor = "red";
 wall2.shapeColor = "orange";
 wall3.shapeColor = "yellow";
 wall4.shapeColor = "blue";
}
else if(select === 3)
{
wall1.shapeColor = "blue";
 wall2.shapeColor = "yellow";
 wall3.shapeColor = "red";
 wall4.shapeColor = "orange";
}
else if(select === 4)
{
wall1.shapeColor = "yellow";
 wall2.shapeColor = "blue";
 wall3.shapeColor = "orange";
 wall4.shapeColor = "red";
}


  }

}
