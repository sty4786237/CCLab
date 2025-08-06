let liquidHeight = 500;

let particles = [];
let liquid;
let filledColor;

function setup() {
  let canvas = createCanvas(800, 800);
  canvas.parent("p5-canvas-container");
  background(50);

  filledColor = color(255);
}

function draw() {
  background(10);

  // liquid
  noStroke();
  fill(50);
  rect(0, liquidHeight, width, height - liquidHeight);

  // generate a particle
  let pos = createVector(mouseX, mouseY);
  let siz = random(5, 25);
  let newP = new Particle(pos.x, pos.y, siz, random(0.5, 3), filledColor);
  particles.push(newP);

  ///// limit the number of particles /////
  while (particles.length > 1000) {
    // remove the oldest (first) particle
    particles.splice(0, 1); // (index, quantity)
  }

  for (let i = 0; i < particles.length; i++) {
    let p = particles[i];

    // resistance
    if (p.pos.y > liquidHeight) {
      let dragCoefficient = 0.05;
      let speed = p.vel.mag();
      let dragMagnitude = dragCoefficient * speed * speed;

      let dragForce = p.vel.copy();
      dragForce.mult(-1); // flip
      dragForce.normalize(); // unit, mag 1, only the direction
      dragForce.mult(dragMagnitude); // force
      p.applyForce(dragForce);
    }

    // gravity
    let gravity = createVector(0, 0.1 * p.mass);
    p.applyForce(gravity);

    // Update and display
    p.update();
    p.display();
    p.checkEdges();
  }
}

// Particle class
class Particle {
  constructor(x, y, siz, mass) {
    this.pos = createVector(x, y);
    this.vel = createVector(random(-3, 3), random(-3, 3));
    this.acc = createVector(0, 0);
    //
    this.siz = siz;
    this.mass = 1; //mass;
    //
    this.r = random(150, 255);
    this.g = random(255);
    this.b = 0; //random(255);
  }
  display() {
    push();
    translate(this.pos.x, this.pos.y); // ***

    noStroke();
    fill(this.r, this.g, this.b);
    ellipse(0, 0, this.siz, this.siz);

    pop(); // ***
  }

  // Apply force according to Newton's 2nd law: F = M * A
  // or A = F / M
  applyForce(force) {
    let f = p5.Vector.div(force, this.mass);
    this.acc.add(f);
  }
  update() {
    this.vel.add(this.acc);
    this.pos.add(this.vel);
    this.acc.mult(0);
  }
  // Make the particles bounce at the bottom
  checkEdges() {
    if (this.pos.y > height - this.mass * 8) {
      // A little dampening when hitting the bottom
      this.vel.y *= -0.9;
      this.pos.y = height - this.mass * 8;
    }
  }
}
// *** push() and pop() are used to save and restore the drawing state
