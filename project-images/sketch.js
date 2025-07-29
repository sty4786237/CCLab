let img;


function preload() {
 img = loadImage("assets/emoji.png");
}


function setup() {
 let canvas = createCanvas(500, 281);
 canvas.parent("p5-canvas-container");


 background(100);
}


function draw() {
 // background(100);


 let x = random(width);
 let y = random(height);
 let size = random(10, 50);


 imageMode(CENTER);
 image(img, x, y, size, size); //(img, x, y, (w), (h));
}
