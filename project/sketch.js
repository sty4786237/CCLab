let input;
let k;
let rotationAngle = 0;

function setup() {
  createCanvas(700, 700);
  angleMode(DEGREES);
  input = int(prompt("Enter the size number of shapes between 3-11:"));
  k = int(prompt("Enter the number of shapes:"));
  background(0);
}

function draw() {
  
  rotationAngle += 0.5;

  if (input >= 3 && input <= 11) {
    push();
    translate(width / 2, height / 2); 
    rotate(rotationAngle); 
    blendMode(ADD);

    for (let angle = 0; angle < 360; angle += 360 / k) {
      push(); // Save current state for each shape

      let radDist = 200;
      let x = cos(angle) * radDist; // Relative to center now
      let y = sin(angle) * radDist;
      let m = cos(angle) * (radDist + 150);
      let n = sin(angle) * (radDist + 150);
      let a = m - x;
      let b = n - y;

      noFill();
      strokeWeight(1);
      stroke(147, 197, 114, 50); 
      beginShape();
      for (let i = 0; i < input; i++) {
        let theta = i * (360 / input);
        let cosT = cos(theta);
        let sinT = sin(theta);
        let px = x + a * cosT - b * sinT;
        let py = y + a * sinT + b * cosT;
        vertex(px, py);
      }
      endShape(CLOSE);

      stroke(201, 204, 63, 50); 
      noFill();
      strokeWeight(1);
      let distance = dist(0, 0, x, y); 
      let ellipseWidth = distance * 0.8;
      let ellipseHeight = distance * 0.4;
      ellipse(0, 0, ellipseWidth, ellipseHeight); 

      pop(); 
    }

    pop(); 
  } else {
    fill(255);
    text("Please enter a valid value between 3 and 11.", width / 2, height / 2);
  }
}
