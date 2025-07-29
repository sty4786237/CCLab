let snd;

function preload() {
  snd = loadSound("assets/kick.mp3");
}
function setup() {
  let canvas = createCanvas(800, 500);
  canvas.parent("p5-canvas-container");
}

function draw() {
  background(220);
  let volValue = map(mouseY, 0, height, 1.0, 0.0,true);
  snd.setVolume(volValue);
  let panValue = map(mouseX, 0, width, -1.0, 1.0, true);
  snd.pan(panValue);
  //center:0, left:-1, right:1(100%)
  snd.rate(map(mouseX, 0, width, 0, 2.0, true)); //100%,% value
}

function mousePressed() {
  snd.play();
}