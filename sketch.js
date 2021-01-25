var fixedRect,movingRect,fixedRect1;

function setup() {
  createCanvas(800,400);
  fixedRect= createSprite(100, 100, 50, 80);
  movingRect= createSprite(400, 200, 80, 30);
  fixedRect1= createSprite(200, 100, 50, 80);
fixedRect.debug=true
movingRect.debug=true
fixedRect1.debug=true
fixedRect1.shapeColor="green"
}

function draw() {
  background(255,255,255);  
  movingRect.x=World.mouseX;
  movingRect.y=World.mouseY;

  if(isTouching(movingRect,fixedRect)){
    movingRect.shapeColor="red";
     fixedRect.shapeColor="red"
  }
  else if(isTouching(movingRect,fixedRect1)){
    movingRect.shapeColor="red";
    fixedRect1.shapeColor="red"
  }
  else{
    movingRect.shapeColor="green";
   fixedRect1.shapeColor="green";
  fixedRect.shapeColor="green" 
   }

  drawSprites();
}

