var character;

function preload(){
  backgroundImg=loadImage("background.jpg");
  characterImg=loadImage("character.jpg");
   }

function setup() {
  createCanvas(800,400);
  
  character = createSprite(700,350,20,50);
  character.addImage("characterImg",characterImg);
  character.scale = 0.1;
  
}
 
function draw() {
  background(backgroundImg);  
  
  drawSprites();
}