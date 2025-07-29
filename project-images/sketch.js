let img;

function setup() {
  let canvas = createCanvas(800, 500);
  canvas.parent("p5-canvas-container");
  //not ideal
  img = loadImage("assets/colorful.jpg");
}

function draw() {
  background(220);
  image(img, 0, 0);
}