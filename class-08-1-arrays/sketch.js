let balls = [];


function setup() {
 let canvas = createCanvas(800, 500);
 canvas.parent("p5-canvas-container");
 background(0);


 for (let i = 0; i < 1000; i++) {
   balls[i] = new Ball();
 }


}


function draw() {
   background(0);


 for (let i = 0; i < balls.length; i++) {
   let eachBall = balls[i];
   eachBall.move();
   eachBall.bounce();
   eachBall.display();
 }
}


//


class Ball {
 constructor() {
   // variables --> properties
   this.x = random(width); //width / 2;
   this.y = height / 2;
   this.dia = random(10, 30);
   this.xSpeed = 0; //random(-3, 3);
   this.ySpeed = random(-3, 3);
   //
   this.r = random(255);
   this.g = random(255);
   this.b = random(255);
 }
 // functions --> methods! actions
 move() {
   this.x += this.xSpeed;
   this.y += this.ySpeed;
 }
 bounce() {
   if (this.x < 0 || this.x > width) {
     this.xSpeed *= -1;
   }
   if (this.y < 0 || this.y > height) {
     this.ySpeed *= -1;
   }
 }
 display() {
   noStroke();
   fill(this.r, this.g, this.b);
   circle(this.x, this.y, this.dia);
 }
}


