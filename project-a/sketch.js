/*
Template for IMA's Creative Coding Lab 

Project A: Generative Creatures
CCLaboratories Biodiversity Atlas 
*/

let flapFrequency = 0;
let bird;
let x,y,pos;

//Set up background in dark blue
function setup() {
  let canvas = createCanvas(800, 500);
  canvas.parent("p5-canvas-container");
  background(20, 28, 49);
  //Initialize the bird position ONCE with random coordinates
  let x = random(width/2-30, width/2+30);
  let y = random(height/2-30, height/2+30);
  bird = {pos: createVector(x, y)};
}

function draw() {
  // Background having opacity to have trail effects
  fill(20, 28, 49, 40);
  noStroke();
  rect(0, 0, width, height);
  
  //Core tech difficulties (Explained below)
  shiningStars();
  brightMoon();
  updateAndDrawBird();
}

// Draw the single bird
function updateAndDrawBird() {
  // Remove the random position generation from here!
  // The bird position is now static, set once in setup()
  push();
  translate(bird.pos.x, bird.pos.y);
  // Glowing effect
  noStroke();
  fill(106, 220, 153, 60);
  ellipse(0, 0, 40, 100);
  // Body
  fill(106, 220, 153);
  ellipse(0, 0, 20, 70);
  fill(141, 0, 196);
  ellipse(0, -20, 5, 60);
  // Eyes
  fill(lerpColor(
    color(255,255,255),
    color(0,0,0),
    (sin(frameCount * 0.263 + 1) + 1) / 2
    )
  );
  circle(-6,-12,5);
  circle(6,-12,5);
  // Flapping wings
  fill(mouseX % 255, ((mouseX + mouseY) / 2) % 255, mouseY % 255);
  flapFrequency += 0.2;
  let wingSize = 30 + sin(flapFrequency) * 10;
  ellipse(-15, 0, wingSize, 15);
  ellipse(15, 0, wingSize, 15);
  // Triangular tail
  drawTriangularTails(0, 35, 10);
  pop();
}

// Triangle tail drawing function
function drawTriangularTails(centerX, centerY, r) {
  beginShape();
  for (let i = 0; i < 3; i++) {
    let radius = -HALF_PI + (i * TWO_PI) / 3;
    let x = centerX + cos(radius) * r;
    let y = centerY + sin(radius) * r;
    vertex(x, y);
  }
  endShape(CLOSE);
}

// Star Patterns
function shiningStars() {
  noStroke();
  fill(
    lerpColor(
      color(20, 28, 49),
      color(255, 255, 255),
      (sin(frameCount * 0.02) + 1) / 2
    )
  );
  circle(165, 582, 10);
  fill(
    lerpColor(
      color(20, 28, 49),
      color(255, 255, 255),
      (sin(frameCount * 0.03 + 1) + 1) / 2
    )
  );
  circle(450, 245, 7);
  fill(
    lerpColor(
      color(20, 28, 49),
      color(255, 255, 255),
      (sin(frameCount * 0.025 + 2) + 1) / 2
    )
  );
  circle(298, 127, 6);
  fill(
    lerpColor(
      color(20, 28, 49),
      color(255, 255, 255),
      (sin(frameCount * 0.035 + 3) + 1) / 2
    )
  );
  circle(286, 372, 4);
  fill(
    lerpColor(
      color(20, 28, 49),
      color(255, 255, 255),
      (sin(frameCount * 0.028 + 4) + 1) / 2
    )
  );
  circle(510, 533, 7);
  fill(
    lerpColor(
      color(20, 28, 49),
      color(255, 255, 255),
      (sin(frameCount * 0.032 + 5) + 1) / 2
    )
  );
  circle(595, 305, 8);
  fill(
    lerpColor(
      color(20, 28, 49),
      color(255, 255, 255),
      (sin(frameCount * 0.04 + 6) + 1) / 2
    )
  );
  circle(653, 617, 2);
}

// Moon patterns
function brightMoon() {
  push();
  translate(145, 225);
  for (let i = 0; i < 3; i++) {
    fill(244, 255, 245, 15 - i * 5);
    noStroke();
    circle(0, 0, 79 + i * 25);
  }
  fill(244, 255, 245);
  noStroke();
  circle(0, 0, 79);
  fill(200, 210, 205, 150);
  circle(-8, -12, 12);
  circle(15, 8, 8);
  circle(-18, 15, 6);
  circle(10, -20, 5);
  circle(-5, 20, 4);
  fill(220, 230, 225, 100);
  for (let i = 0; i < 15; i++) {
    let angle = random(TWO_PI);
    let radius = random(20, 35);
    let x = cos(angle) * radius;
    let y = sin(angle) * radius;
    circle(x, y, random(1, 3));
  }
  fill(255, 255, 255, 180);
  circle(-15, -15, 20);
  pop();
}