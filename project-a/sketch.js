/*
Template for IMA's Creative Coding Lab 

Project A: Generative Creatures
CCLaboratories Biodiversity Atlas 
*/

//Start
let time = 0;
let flapFrequency = 0;
let birds = []; // Array to store multiple birds (The most challenging tech difficulty)

//For calculating mouse speed
let prevMouseX = 0;
let prevMouseY = 0;
let mouseSpeed = 0;

//Set up background in dark blue
function setup() {
  
  let canvas=createCanvas(800, 500);
  canvas.parent('p5-canvas-container'); // Attach the canvas to the container in index.html
  background(20, 28, 49);
  birds.push({ x: width / 2, y: height / 2, initialPosition: 0 }); // Draw the first bird on the center
}

function draw() {
  // Background having opacity to have trail effects
  fill(20, 28, 49, 40);
  noStroke();
  rect(0, 0, width, height);
  //Core tech difficulties (Explained below)
  shiningStars();
  brightMoon();
  drawBirds();

  // Calculate mouse speed
  mouseSpeed = dist(mouseX, mouseY, prevMouseX, prevMouseY);
  prevMouseX = mouseX;
  prevMouseY = mouseY;
}

// Add birds when you click the mouse (The maximum is 5)
function mousePressed() {
  if (birds.length < 5) {
    birds.push({
      x: mouseX,
      y: mouseY,
      initialPosition: random(TWO_PI), // different initial positions
    });
  }
}

// Draw all birds
function drawBirds() {
  for (let i = 0; i < birds.length; i++) {
    updateAndDrawBird(birds[i]);
  }
}

// Draw a single bird
function updateAndDrawBird(bird) {
  // Dynamic distance among birds based on mouse speed
  let radiusX = 80 + mouseSpeed * 5; 
  let radiusY = 50 + mouseSpeed * 3; 
  //Forming an ellipse because of different mouse speed

  bird.x +=
    (mouseX + cos(time * 0.02 + bird.initialPosition) * radiusX - bird.x) *
    0.05;
  bird.y +=
    (mouseY + sin(time * 0.02 + bird.initialPosition) * radiusY - bird.y) *
    0.05;

  push();
  translate(bird.x, bird.y);

  // Glowing effect
  noStroke();
  fill(106, 220, 153, 60);
  ellipse(0, 0, 40, 100);

  // Body
  fill(106, 220, 153);
  ellipse(0, 0, 20, 70);
  fill(141, 0, 196);
  ellipse(0, -20, 5, 60);

  // Flapping wings
  fill(mouseX % 255, ((mouseX + mouseY) / 2) % 255, mouseY % 255);
  flapFrequency += 0.2;
  let wingSize = 30 + sin(flapFrequency + bird.initialPosition) * 10;
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
      (sin(time * 0.02) + 1) / 2
    )
  );
  circle(165, 582, 10);

  fill(
    lerpColor(
      color(20, 28, 49),
      color(255, 255, 255),
      (sin(time * 0.03 + 1) + 1) / 2
    )
  );
  circle(450, 245, 7);

  fill(
    lerpColor(
      color(20, 28, 49),
      color(255, 255, 255),
      (sin(time * 0.025 + 2) + 1) / 2
    )
  );
  circle(298, 127, 6);

  fill(
    lerpColor(
      color(20, 28, 49),
      color(255, 255, 255),
      (sin(time * 0.035 + 3) + 1) / 2
    )
  );
  circle(286, 372, 4);

  fill(
    lerpColor(
      color(20, 28, 49),
      color(255, 255, 255),
      (sin(time * 0.028 + 4) + 1) / 2
    )
  );
  circle(510, 533, 7);

  fill(
    lerpColor(
      color(20, 28, 49),
      color(255, 255, 255),
      (sin(time * 0.032 + 5) + 1) / 2
    )
  );
  circle(595, 305, 8);

  fill(
    lerpColor(
      color(20, 28, 49),
      color(255, 255, 255),
      (sin(time * 0.04 + 6) + 1) / 2
    )
  );
  circle(653, 617, 2);

  time++;
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
//Finish


