let particles=[];
let liquid;

function setup() {
 let canvas = createCanvas(800, 800);
 canvas.parent("p5-canvas-container");
 background(50);

}


function draw() {
    background(10);
    let liquid=new Liquid(0,500, width, height-500, 0.1);
    liquid.display();



 // generate a particle
 let position = createVector(mouseX, mouseY);
 let size = random(5, 25);
 let newP = new Particle(position, size);
 particles.push(newP);


 // update and display the particles
 for (let i = 0; i < particles.length; i++) {
   let p = particles[i]; // access each particle
 }


 ///// limit the number of particles /////
 while (particles.length > 1000) {
   // remove the oldest (first) particle
   particles.splice(0, 1); // (index, quantity)
 }

 for (let p of particles) {
    // Check whether the particles are in the liquid
    if (liquid.contains(p)) {
      // Calculate drag force
      let dragForce = liquid.calculateDrag(p);

      // Apply drag force to Particle
      p.applyForce(dragForce);
    }

    // Gravitational force is proportional to the mass
    let gravity = createVector(0, 0.1 * p.mass);

    // Apply gravitational force
    p.applyForce(gravity);

    // Update and display
    p.update();
    p.display();
    p.checkEdges();
  }
}

function mousePressed() {
  initializeMovers();
}

function initializeMovers() {
  // Calculate the spacing based on the width of the canvas
  let xSpacing = width / 9;

  // Fill the movers array with 9 Mover objects with random masses
  for (let i = 0; i < 9; i ++) {
    let mass = random(0.5, 3);
    let xPosition = xSpacing * i + xSpacing / 2;
    particles[i] = new Particle(xPosition, 0, 10, mass, color(i, 100, 100));
  }

}






//This is where physics begins

// Liquid class
class Liquid{
    constructor(x, y, width, height, dragCoefficient) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.dragCoefficient = dragCoefficient;
  }

  // Check whether the Mover in the Liquid
  contains(mass) {
    let l = mass.position;
    return (
      l.x > this.x &&
      l.x < this.x + this.width &&
      l.y > this.y &&
      l.y < this.y + this.height
    );
  }

  // Calculate drag force
  calculateDrag(mass) {
    // The drag force magnitude is coefficient * speed squared
    let speed = mass.velocity.mag();
    let dragMagnitude = this.dragCoefficient * speed * speed;

    // Create the drag force vector (opposite direction of velocity)
    let dragForce = mass.velocity.copy();
    dragForce.mult(-1);

    // Scale the drag force vector to the magnitude calculated above
    dragForce.setMag(dragMagnitude);

    return dragForce;
  }

  display() {
    noStroke();
    fill(50);
    rect(this.x, this.y, this.w, this.h);
  }
}




// Particle class
class Particle {
 constructor(x,y,size,mass,color) {
   this.position=createVector(x, y);
   this.x= x;
   this.y= y;
   this.size = size;
   this.mass = mass;
   this.velocity = createVector(random(-3, 3), random(-3, 3));
   //
   this.r = random(150, 255);
   this.g = random(255);
   this.b = 0; //random(255);
   this.color = color(this.r, this.g, this.b);
 }
 move() {
   this.position.add(this.velocity);
 }
 fall() {
   this.velocity.y += 0.1;
 }
 display() {
   push();
   translate(this.position.x, this.position.y); // ***

   noStroke();
   fill(this.color);
   ellipse(0, 0, this.size,this.size); 

   pop();
 }
}
// *** push() and pop() are used to save and restore the drawing state

//Force System class
class ForceSystem{
    constructor(){
        this.forces=[];
    }

   addForces(particles)
   {
       for (let j=0; j<particles.length; j++){
           let p = particles[j];
           for (let i=0; i<this.forces.length; i++){
               let f = this.forces[i];
               p.applyForce(f);
           }
       }
   }
}

//Particle Mover class
class ParticleMover {
  constructor(particle) {
    this.particle = particle;
  }

  applyForce(force) {
    this.particle.applyForce(force);
  }

  update() {
    this.particle.update();
  }

  display() {
    this.particle.display();
  }

  checkEdges() {
    this.particle.checkEdges();
  }

  // Apply force according to Newton's 2nd law: F = M * A
  // or A = F / M
  applyForce(force) {
    let f = p5.Vector.div(force, this.mass);
    this.acceleration.add(f);
  }

  update() {
    // Change the velocity by the acceleration
    this.velocity.add(this.acceleration);

    // Change the position by the velocity
    this.position.add(this.velocity);

    // Clear the acceleration each frame
    this.acceleration.mult(0);
  }

  // Make the particles bounce at the bottom
  checkEdges() {
    if (this.position.y > height - this.mass * 8) {
      // A little dampening when hitting the bottom
      this.velocity.y *= -0.9;
      this.position.y = height - this.mass * 8;
    }
  }
}