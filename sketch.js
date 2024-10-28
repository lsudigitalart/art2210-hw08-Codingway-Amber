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
  // Head
  push();
  strokeWeight(.7);
  translate(19, 19);
  scale(4);
  fill(70);
  rect(0, 0, 115, 75);
  pop();

  // Screen
  push();
  strokeWeight(.7);
  translate(48, 39);
  scale(3.4);
  fill(48, 169, 68);
  rect(0, 0, 118, 75);
  pop();

  // Right Eye
  push();
  noStroke()
  translate(157, 117);
  scale(.7);
  fill(245, 255, 5);
  rect(0, 0, 70);
  pop();

  // Left Eye
  push();
  noStroke()
  translate(293, 117);
  scale(.7);
  fill(245, 255, 5);
  rect(0, 0, 70);
  pop();

  // Mouth
  push();
  noStroke()
  translate(143, 204);
  scale(.65);
  fill(245, 255, 5);
  rect(0, 0, 70);
  pop();

}