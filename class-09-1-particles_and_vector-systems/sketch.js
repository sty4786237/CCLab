let particles=[];

function setup() {
 let canvas = createCanvas(800, 500);
 canvas.parent("p5-canvas-container");
 background(50);

}


function draw() {
    background(10);



 // generate a particle
 let position = createVector(mouseX, mouseY);
 let size = random(5, 25);
 let newP = new Particle(position, size);
 particles.push(newP);


 // update and display the particles
 for (let i = 0; i < particles.length; i++) {
   let p = particles[i]; // access each particle
   p.fall();
   p.move();
   p.display();
 }


 ///// limit the number of particles /////
 while (particles.length > 1000) {
   // remove the oldest (first) particle
   particles.splice(0, 1); // (index, quantity)
 }

}

// Particle class
class Particle {
 constructor(position, size) {
   this.position=createVector(position.x, position.y);
   this.size = size;
   //
   this.velocity = createVector(random(-3, 3), random(-3, 3));
   //
   this.r = random(150, 255);
   this.g = random(255);
   this.b = 0; //random(255);
   //
   this.rotateSpeed = random(-0.3, 0.3);
 }
 move() {
   this.position += this.velocity;
 }
 fall() {
   this.velocity.y += 0.1;
 }
 display() {
   push(); // ***
   translate(this.x, this.y); // ***


   rotate(frameCount * this.rotateSpeed);
   rectMode(CENTER);


   noStroke();
   fill(this.r, this.g, this.b);
   rect(0, 0, this.size, this.size);


   pop(); // ***
 }
}
// *** push() and pop() are used to save and restore the drawing state