let img;

function preload() {
  //img=loadImage("filepath");
  img=loadImage("assets/colorful.jpg");
  //loadSound()
  //loadString()
  //loadFont()
  //loadJSON()....
}

function setup() {
  let canvas = createCanvas(500, 281);
  canvas.parent("p5-canvas-container");
  //not ideal
  img = loadImage("assets/colorful.jpg");
}

function draw() {
  background(220);

  let r=map(mouseX, 0, width, 0, 255);
  let g=map(mouseY, 0, height, 0, 255);
  let b=map(mouseX, 0, width, 255, 0);

  tint(r, g, b);
  image(img, 0, 0);
  //image(img, x, y, (width), (height));
}