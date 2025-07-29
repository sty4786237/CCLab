let img;


function preload() {
 img = loadImage("assets/sprite.png");
}


function setup() {
 let canvas = createCanvas(500, 281);
 canvas.parent("p5-canvas-container");


 background(0);
}


function draw() {
 // background(100);


 let x = mouseX;
 let y = mouseY;
 let size = random(10, 50);
 push();
 blendMode(ADD);

 tint(5,5,5);
 imageMode(CENTER);
 image(img, x, y, size, size); //(img, x, y, (w), (h));
 pop();
}
