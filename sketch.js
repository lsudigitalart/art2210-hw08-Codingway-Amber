// Used AI to help randomize the colors.

let headColor, screenColor, eyeColor, glowColor, mouthColor, cheekColor, buttonColor;

function setup() {
  createCanvas(500, 350);

  randomizeColors();
}

function draw() {
  background(220);

  // push();
  // fill(0);
  // text(mouseX, 0, 370); 
  // text(mouseY, 0, 390);
  // pop();

  smolBoi();
}

function mousePressed() {
  randomizeColors();
}

function randomizeColors() {
  headColor = color(50 + random(100), 50 + random(100), 50 + random(100));
  screenColor = color(20 + random(80), 130 + random(100), 50 + random(60));
  eyeColor = color(230 + random(25), 230 + random(25), random(20));
  glowColor = color(180 + random(50), 110 + random(60), 40 + random(60));
  mouthColor = color(230 + random(25), 230 + random(25), random(20));
  cheekColor = color(230 + random(25), 230 + random(25), random(20));
  buttonColor = color(230 + random(25), 230 + random(25), random(20));
}

function smolBoi() {
  // Head
  push();
  strokeWeight(.7);
  translate(19, 19);
  scale(4);
  fill(headColor);
  rect(0, 0, 115, 75);
  pop();

  // Screen
  push();
  strokeWeight(.7);
  stroke(16, 77, 26);
  translate(48, 39);
  scale(3.4);
  fill(screenColor);
  rect(0, 0, 118, 75);
  pop();

  // Right Eye
  push();
  noStroke();
  translate(157, 117);
  scale(.7);
  fill(eyeColor);
  rect(0, 0, 70, 60);
  pop();

  // Right Glow
  push();
  strokeWeight(3);
  stroke(glowColor);
  translate(157, 117);
  scale(.3);
  fill(255);
  rect(0, 0, 70, 60);
  pop();

  // Left Eye
  push();
  noStroke();
  translate(293, 117);
  scale(.7);
  fill(eyeColor);
  rect(0, 0, 70, 60);
  pop();

  // Left Glow
  push();
  strokeWeight(3);
  stroke(glowColor);
  translate(293, 117);
  scale(.3);
  fill(255);
  rect(0, 0, 70, 60);
  pop();

  // Mouth
  push();
  noStroke();
  translate(168, 204);
  scale(.65);
  fill(mouthColor);
  rect(0, 0, 250, 50);
  pop();

  // Right Cheek
  push();
  noStroke();
  translate(135, 177);
  scale(.5);
  fill(cheekColor);
  rect(0, 0, 65, 55);
  pop();

  // Left Cheek
  push();
  noStroke();
  translate(330, 177);
  scale(.5);
  fill(cheekColor);
  rect(0, 0, 65, 55);
  pop();

  // Button 1
  push();
  strokeWeight(3);
  stroke(glowColor);
  translate(455, 280);
  scale(.25);
  fill(buttonColor);
  rect(0, 0, 65, 55);
  pop();

  // Button 2
  push();
  strokeWeight(3);
  stroke(glowColor);
  translate(455, 260);
  scale(.25);
  fill(buttonColor);
  rect(0, 0, 65, 55);
  pop();
}