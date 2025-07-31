/*
  Check our the GOAL and the RULES of this exercise at the bottom of this file.
  
  After that, follow these steps before you start coding:

  1. rename the dancer class to reflect your name (line 35).
  2. adjust line 20 to reflect your dancer's name, too.
  3. run the code and see if a square (your dancer) appears on the canvas.
  4. start coding your dancer inside the class that has been prepared for you.
  5. have fun.
*/

let dancer;

function setup() {
  // no adjustments in the setup function needed...
  let canvas = createCanvas(windowWidth, windowHeight);
  canvas.parent("p5-canvas-container");

  // ...except to adjust the dancer's name on the next line:
  dancer = new AllanDancer(width / 2, height / 2);
}

function draw() {
  // you don't need to make any adjustments inside the draw loop
  background(0);
  drawFloor(); // for reference only

  dancer.update();
  dancer.display();
}

// You only code inside this class.
// Start by giving the dancer your name, e.g. LeonDancer.
class AllanDancer {
  constructor(startX, startY) {
    this.x = startX;
    this.y = startY;
    // add properties for your dancer here:
    //..
    //..
    //..
    
    this.bodySize = 100; // max 200px
    this.headSize = 50; // max 200px
    this.headColor = color(23, 125, 42);
    this.legLength = 80; // max 200px
    this.legColor = color(123, 34, 215);
    this.armLength = 60; // max 200px
    this.armColor = color(147, 197, 114);
    this.eyeSize = 10; // max 200px
    



  }
  update() {
    this.bodyColor = color(sin(frameCount * 0.01) * 255, sin(frameCount * 0.05) * 255, 150); 
    // body color changes over time
    this.eyeColor = lerpColor(color(255, 0, 0), color(0, 0, 255), (sin(frameCount * 0.1) + 1) / 2);
    // eye color changes over time

    // update properties here to achieve
    // your dancer's desired moves and behaviour
  }
  display() {
    // the push and pop, along with the translate 
    // places your whole dancer object at this.x and this.y.
    // you may change its position on line 19 to see the effect.
    push();
    translate(this.x, this.y);

    // ******** //
    // ⬇️ draw your dancer from here ⬇️
    this.drawBody(); // draw the body
    this.drawHead(); // draw the head
    this.drawLegs(); // draw the legs
    this.drawEyes(); // draw the eyes
    this.drawArms(); // draw the arms
    

    // ⬆️ draw your dancer above ⬆️
    // ******** //

    // the next function draws a SQUARE and CROSS
    // to indicate the approximate size and the center point
    // of your dancer.
    // it is using "this" because this function, too, 
    // is a part if your Dancer object.
    // comment it out or delete it eventually.
    this.drawReferenceShapes()

    pop();
  }

  drawBody(){
    push();
    fill(this.bodyColor);
    rectMode(CENTER);
    let bodyShift = sin(frameCount * 0.05) * 7; 
    rect(bodyShift, bodyShift, this.bodySize, this.bodySize * 1.5); // body
    pop();
  }
  drawHead(){
    push();
    rectMode(CENTER);
    translate(0, -this.bodySize / 2 - this.headSize / 2);
    pop();
    fill(this.headColor);
    ellipse(0, -this.bodySize*0.75, this.headSize, this.headSize); // head
  }
  drawLegs(){
    push();
    rectMode(CENTER);
    translate(0, this.bodySize / 2);
    pop();
    let legsshift = sin(frameCount * 0.1) * 5;
    fill(this.legColor);
    rect(-this.bodySize / 2, this.bodySize / 2 + legsshift, this.bodySize / 4, this.legLength); // left leg
    rect(this.bodySize / 4, this.bodySize / 2 + legsshift, this.bodySize / 4, this.legLength); // right leg
  }
  drawArms(){
    push();
    rectMode(CENTER);
    translate(0, -this.bodySize / 4);
    pop();
    let armShift = sin(frameCount * 0.15) * 9; 
    fill(this.armColor);
    rect(-this.bodySize / 3 - this.armLength / 2 - 20 + armShift, -this.bodySize / 4, this.armLength, this.bodySize / 4); // left arm
    rect(this.bodySize / 3 + this.armLength / 2 + 20 - this.armLength + armShift, -this.bodySize / 4, this.armLength, this.bodySize / 4); // right arm
  }
  drawEyes(){
    push();
    rectMode(CENTER);
    translate(0, -this.bodySize / 2 - this.headSize / 2);
    pop();
    fill(this.eyeColor);
    ellipse(-this.bodySize / 4, -this.bodySize / 2 - this.headSize / 2, this.eyeSize, this.eyeSize); // left eye
    ellipse(this.bodySize / 4, -this.bodySize / 2 - this.headSize / 2, this.eyeSize, this.eyeSize); // right eye
  }

  drawReferenceShapes() {
    noFill();
    stroke(255, 0, 0);
    line(-5, 0, 5, 0);
    line(0, -5, 0, 5);
    stroke(255);
    rect(-100, -100, 200, 200);
    fill(255);
    stroke(0);
  }
}



/*
GOAL:
The goal is for you to write a class that produces a dancing being/creature/object/thing. In the next class, your dancer along with your peers' dancers will all dance in the same sketch that your instructor will put together. 

RULES:
For this to work you need to follow one rule: 
  - Only put relevant code into your dancer class; your dancer cannot depend on code outside of itself (like global variables or functions defined outside)
  - Your dancer must perform by means of the two essential methods: update and display. Don't add more methods that require to be called from outside (e.g. in the draw loop).
  - Your dancer will always be initialized receiving two arguments: 
    - startX (currently the horizontal center of the canvas)
    - startY (currently the vertical center of the canvas)
  beside these, please don't add more parameters into the constructor function 
  - lastly, to make sure our dancers will harmonize once on the same canvas, please don't make your dancer bigger than 200x200 pixels. 
*/