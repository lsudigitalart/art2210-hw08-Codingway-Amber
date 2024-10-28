function setup() {
  createCanvas(500, 400);
}

function draw() {
  background(220);
  // noStroke();

  push();
  fill(0);
  text(mouseX, 0, 370); 
  text(mouseY, 0, 390);
  pop();

  smolBoi();
}

function smolBoi() {
  // push();
  // noFill();
  // // translate(245, 150)
  // strokeWeight(1);
  // stroke(232, 74, 116);
  // curve(5, 26, mouseX, mouseY, 73, 61, 15, 65);
  // pop();
  
  // Body
  push();
  strokeWeight(.7);
  translate(19, 19);
  scale(4);
  fill(70);
  rect(0, 0, 115, 75);
  pop();

  // Face
  push();
  strokeWeight(.7);
  translate(48, 39);
  scale(3.4);
  fill(48, 169, 68);
  rect(0, 0, 118, 75);
  pop();


}