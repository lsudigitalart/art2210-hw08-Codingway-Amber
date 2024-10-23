let = generateSmol = false;
let = smolSize 

function setup() {
  createCanvas(500, 600);
}

function draw() {
  background(220);
  translate(width/2, height/2);
  cuteSmol(50);

  if (generateSmol) {
    cuteSmol(smolSize)
  }

}

function cuteSmol(smolWidth) {
  circle(0, 0, smolWidth);
}