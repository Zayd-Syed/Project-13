var garden,rabbit;
var gardenImg,rabbitImg;
var apples,leaaves

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  leafImg = loadImage("leaf.png");
  appleImg = loadImage("apple.png");
}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);

//creating boy running
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);
}


function draw() {
  background(0);

 createApples();
 createLeaves();  
  edges= createEdgeSprites();
  rabbit.collide(edges);
  rabbit.x = World.mouseX;
 console.log();
  drawSprites();
}

function createApples(){
  if (frameCount % 80 === 0) {
    apples = createSprite(random(50, 350),40,10,10);
    apples.velocityY= 3;
    apples.addImage(appleImg);
  apples.x = Math.round(random(10,600));
  apples.scale = 0.10;

}
}

function createLeaves() {
  if (frameCount % 80 === 0) {
    leaves = createSprite(random(50,350),40,10,10);
    leaves.velocityY= 3;
    leaves.addImage(leafImg);
    leaves.x = Math.round(random(10,600));
    leaves.scale = 0.10;

  }
}

