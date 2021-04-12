var snowImage;
var snow;

function preload(){
  snowImage=loadImage("snow1.jpg")

}

function setup() {
  createCanvas(800,400);
  snow(400, 200, 50, 50);
  snow.addImage(snowImage)
}

function draw() {
  background(255,255,255);  
  drawSprites();
}