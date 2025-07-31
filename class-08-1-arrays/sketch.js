let x = [];
let y = [];
let xSpeed = [];
let ySpeed = [];
let dia = [];
let r=[];
let g=[];
let b=[];


function setup() {
 let canvas = createCanvas(800, 500);
 canvas.parent("p5-canvas-container");


 for (let i = 0; i < 15; i++) {
   x[i] = width / 2;
   y[i] = height / 2;
   xSpeed[i] = random(-3, 3);
   ySpeed[i] = random(-3, 3);
   dia[i] = random(10, 30);
   r[i] = random(255);
   g[i] = random(255);
   b[i] = random(255);
 }
}


function draw() {
 background(0);


 for (let i = 0; i < x.length; i++) {
   // move
   x[i] += xSpeed[i];
   y[i] += ySpeed[i];
   // bounce
   if (x[i] < 0 || x[i] > width) {
     xSpeed[i] *= -1; //xSpeed = xSpeed * -1;
   }
   if (y[i] < 0 || y[i] > height) {
     ySpeed[i] *= -1;
   }
   // display
   noStroke();
   blendMode(ADD);
   fill(r[i], g[i], b[i], 150);
   circle(x[i], y[i], dia[i]);
 }
}
