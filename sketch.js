var car,wall;
var speed,weight;

function setup() {
  createCanvas(800,400);
 car= createSprite(100, 200, 20, 20);
 wall=createSprite(750,200,20,200);
 speed=random(55,90);
 weight=random(2260,3300);
}

function draw() {
  car.velocityX=speed;
  background(255,255,255);  

if(wall.x-car.x < wall.width/2+car.width/2){

  car.velocityX=0;
var deformation=0.5 *weight*speed*speed/22509

if(deformation > 180){

  car.shapeColor="red";
}
if(deformation < 180 && deformation > 80){

  car.shapeColor="yellow";
}
if(deformation > 80){

  car.shapeColor="green";
}

}


  drawSprites();
}