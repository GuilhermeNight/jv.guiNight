function setup() {
  createCanvas(600, 600);
  background("pink");
}

function draw() {

  stroke("white")
  fill("black")
  
  if (mouseIsPressed){
    rect (mouseX,mouseY, 20,30);
  }
}  
