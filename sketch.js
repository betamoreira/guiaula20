function setup() {
  createCanvas(800,400);
  retFixo = createSprite(600,200,50,80);
  retFixo.shapeColor = "green";
  retFixo.debug = true;
  retMovendo = createSprite(400,800,80,30);
  retMovendo.shapeColor = "green";
  retMovendo.debug = true;

}

function draw() {
  background(255,255,255); 
  
  retMovendo.x = World.mouseX;
  retMovendo.y = World.mouseY;

  if(retMovendo.x - retFixo.x < retFixo.width/2 + retMovendo.width/2){
    retFixo.shapeColor = "red";
    retMovendo.shapeColor = "red";
  }
   else {
    retFixo.shapeColor = "green";
    retMovendo.shapeColor = "green";
   }

  console.log(retFixo.x - retMovendo.x);

  drawSprites();
}