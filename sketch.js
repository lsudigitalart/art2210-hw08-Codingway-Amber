function setup() {
  createCanvas(500, 600);
}

function draw() {
  background(220);
  randomSeed(0);
  for (var i = 35; i < width + 40; i += 40) {
  var pink = int(random(0, 102));
  var scalar = random(0.25, 1.0);
  cat(i, 110, pink, scalar);
 }

  push()
  fill(0)
  text(mouseX, 0, 240); 
  text(mouseY, 0, 260);
  pop()
}

function cat(x, y, p, s) {
  push()
  translate(x, y);
  scale(s); // Set the scale
  stroke(p); // Set the pink value
  strokeWeight(70);
  line(0, -60, 0, -65); // Body
  noStroke();
  fill(255, 192, 203-p);
  ellipse(-17.5, -65, 30, 30); // Left eye dome
  ellipse(17.5, -65, 30, 30); // Right eye dome
  fill(p);
  ellipse(-14, -65, 8, 8); // Left eye
  ellipse(14, -65, 8, 8); // Right eye
  pop()
}