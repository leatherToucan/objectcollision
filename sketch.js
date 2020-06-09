var fixedRect, movingRect;
var obj1,obj2,obj3,obj4;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  obj1 = createSprite(600,600,50,50);
  obj1.shapeColor = "blue";
  obj2 = createSprite(200,300,60,40);
  obj2.shapeColor = "pink";
  obj3 = createSprite(1100,200,40,40);
  obj3.shapeColor = "magenta";
  obj4 = createSprite(700,300,70,30);
  obj4.shapeColor = "lime";
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

 isTouching(movingRect,obj2);
  drawSprites();
}

function isTouching(object1,object2){
  if (object1.x - object2.x < object1.width/2 + object2.width/2
    && object1.x - object2.x < object1.width/2 + object2.width/2
    && object2.y - object1.y < object1.height/2 + object2.height/2
    && object1.y - object2.y < object1.height/2 + object2.height/2) {
      object2.shapeColor = "red";
  object1.shapeColor = "red";
}

}