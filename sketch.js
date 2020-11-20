var car, wall;
var speed, weight;
var colord;

function setup() {
  createCanvas(1025,400);
  speed=random(55,90);
  weight=random(400,1500)
car = createSprite(50, 200, 50, 50);
car.velocityX=speed;
wall = createSprite(925, 200, 60, height/2);
colord=createSprite(512, 50, 50,50);
colord.shapeColor=color(0,0,0);
}

function draw() {
  background(0,0,0);  
  if (car.x-wall.x<car.width/2+wall.width/2
    && wall.x-car.x<car.width/2+wall.width/2) {
var deformation=0.5*weight*speed*speed/22500;
if (deformation<100) {
  colord.shapeColor=color(0,255,0);
} else if(deformation<180 && deformation>100){
  colord.shapeColor=color(230,230,0);
} else if(deformation>180){
  colord.shapeColor=color(255,0,0);
}
car.velocityX=0;
    }

  drawSprites();
}