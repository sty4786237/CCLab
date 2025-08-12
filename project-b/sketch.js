let img1, img2
let flower1, flower2;
let spawnedFigures = [];
let FiguresArray = [
  new Figure1(),
  new Figure2(),
];
let isDisplaying = false;

function preload() {
  img1 = loadImage("assets/figure1.png");
  img2 = loadImage("assets/figure2.png");
  flower1 = loadImage("assets/flower1.png");
  flower2 = loadImage("assets/flower2.png");
  cloud = loadImage("assets/cloud.png");
}

function setup() {
  let canvas = createCanvas(1050, 250);
  canvas.parent("p5-canvas-container");
}

function draw() {
  background(15);

  if (mouseIsPressed) {
    let randomFigureIndex = floor(random(FiguresArray.length));
    let newFigure = FiguresArray[randomFigureIndex];
    spawnedFigures.push(newFigure);
  }

  if (spawnedFigures.length > 8) {
    spawnedFigures.splice(0, 1);
  }

  for (let i = 0; i < spawnedFigures.length; i++) {
    let s = spawnedFigures[i];
  }

  if (mouseIsPressed) {
    s.display();
    isDisplaying = true;
    if (isDisplaying) {
      s.move();
      s.checkEdges();
      s.applyForce(f); //gravity or some other forces?
      s.update();
    }
  }


  //There's where the classes begin

  class Figures {
    constructor(x, y, pos, acc, mass) {
      //Default settings
      this.x = x;
      this.y = y;
      this.pos = createVector(this.x, this.y);
      this.acc = createVector(0, 0);
      this.mass = 1.0;
    }

    display() {
      if (mouseIsPressed){
      image(this.img, this.pos.x, this.pos.y);
    }
    }

    move() {

      this.vel= createVector(0.1, 0);
      this.pos.add(this.vel);

    }

    checkEdges() {

      if (this.pos.x > width) {
        this.pos.x = width;
        this.vel.x *= -1;
      } else if (this.pos.x < 0) {
        this.pos.x = 0;
        this.vel.x *= -1;
      }

    }

    applyForce(f) {
      let f = createVector(0,-0.5);
      f.div(this.mass);
      this.acc.add(f);
    }

    update() {
      if (mouseIsPressed) {
        this.vel=createVector(0,0.4);
        this.vel.add(this.acc);
        this.pos.add(this.vel);
      }
      this.acc.mult(0);
      if (this.pos.y==this.y)
      {
        this.vel=createVector(0,0);
      }
    }

  }

  class Figure1 extends Figures {

    constructor() {
      this.img = img1.resize(60, 60);
      this.pos=createVector(random(30,width-30), 30);
      this.mass=2.0;
    }

  }

  class Figure2 extends Figures {

    constructor() {
      this.img = img2.resize(50, 50);
      this.pos=createVector(random(25,width-25), 25);
      this.mass=0.5;
    }

  }

}