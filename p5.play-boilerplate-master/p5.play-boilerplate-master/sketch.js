var car,wall;
var speed,weight


function setup() {
  createCanvas(1600,400);
  speed=random(55,90);
  weight=random(400,1500);
car = createSprite(50,200,40,20);
car.shapeColor="blue";

wall = createSprite(1500,200,60,height/2)
wall.shapeColor=(80,80,80);
}

function draw() {
  background(255,255,255);  
  car.velocityX=speed;
  if (car.isTouching(wall)) {
car.velocityX=0;

  }
  if (wall.x-car.x<(car.width+wall.width)/2){
car.velocityX=0;
var deformation=0.5 * weight * speed* speed/22509;
if (deformation>180) {
 car.shapeColor="green";
}





  }
  drawSprites();
}