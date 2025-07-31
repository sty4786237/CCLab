let dancer;


function setup() {
 let canvas = createCanvas(800, 500);
 canvas.parent("p5-canvas-container");


 dancer = new MoonDancer();
 //console.log(dancer.x, dancer.dia);
}


function draw() {
 background(100);


 if (mouseIsPressed) {
   dancer.move();
 }
 dancer.display();
}




// CLASS: Blueprint, plan, design
class MoonDancer {
 // very special function
 constructor() {
   // variables --> Properties
   this.x = width / 2;
   this.y = height / 2;
   this.dia = 100;
   //
   this.xSpeed = random(-3, 3);
 }
 // functions --> methods
 move() {
   this.x += this.xSpeed;
 }
 display() {
   circle(this.x, this.y, this.dia);
 }
}



