let img1, img2, img3, img4, img5, img6, img7, flower1, flower2, cloud, clickSnd;
let fig1, fig2, fig3, fig4, fig5, fig6, fig7;
let spawnedFigures = [];
let isDisplaying = false;
let FiguresArray = []; // I initialized the FiguresArray at first according to the instruction of fixing the bug

class Figure {
  constructor(x, y, pos, acc, vel, mass, img) {
    //Default settings
    this.x = x;
    this.y = y;
    this.pos = createVector(this.x, this.y);
    this.acc = createVector(0, 0);
    this.vel = createVector(0, 0);
    this.mass = 1.0;
    this.img = img;
  }

  display() {
    if (mouseIsPressed) {
      image(this.img, this.pos.x, this.pos.y);
    }
  }

  move() {
    this.vel = createVector(0.1, 0);
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

  applyForce(force) {
    let f = p5.Vector.div(force, this.mass);
    this.acc.add(f);
  }

  update() {
    if (mouseIsPressed) {
      this.vel = createVector(0, 0.4);
      this.vel.add(this.acc);
      this.pos.add(this.vel);
    }
    this.acc.mult(0);
    if (this.pos.y == this.y) {
      this.vel = createVector(0, 0);
    }
  }

  displayWords(words) {
    clickSnd.play();
    push();
    translate(this.x, this.y - 70);
    textAlign(CENTER);
    textSize(10);
    fill(255);
    text(words, 0, 0);
    pop();
  }
}

class Figure1 {
  constructor(img,pos,mass) {
    this.img = img1;
    this.pos = createVector(random(20, width - 20), height-20);
    this.mass = 2.0;
  }
  if(mouseIsPressed) {
    displayWords(
      "Saying: “Tomorrow will be my 700th birthday, wish the network works well”\n Name: Axis-07"
    );
  }
}

class Figure2 {
  constructor(img,pos,mass) {
    this.img = img2;
    this.pos = createVector(random(25, width - 25), height-25);
    this.mass = 2.5;
  }
  if(mouseIsPressed) {
    displayWords(
      "Saying: 0010101001010100101010101010101010101010101010101\n Name: 01000100010001"
    );
  }
}

class Figure3 {
  constructor(img,pos,mass) {
    this.img = img3;
    img3.tint(255, 0, 0); // There's the problematic code: I think tint() method can modify the img3 in place so it can become red, but there's some problems about this
    this.pos = createVector(random(20, width - 20), height - 20);
    this.mass = 1.5;
  }
  if(mouseIsPressed) {
    displayWords("Saying:_________________________________\n Name: __________");
  }
}

class Figure4 {
  constructor(img,pos,mass) {
    this.img = img4;
    this.pos = createVector(random(20, width - 20), height - 20);
    this.mass = 2.0;
  }
  if(mouseIsPressed) {
    displayWords(
      "Saying: System overload... requesting assistance from external processes...\n Name: Cache_Handler"
    );
  }
}

class Figure5 {
  constructor(img,pos,mass) {
    this.img = img5;
    this.pos = createVector(random(25, width - 25), height - 25);
    this.mass = 2.5;
  }
  if(mouseIsPressed) {
    displayWords("Saying: There might be something wrong…\n Name: MagnetX");
  }
}

class Figure6 {
  constructor(img,pos,mass) {
    this.img = img6;
    this.pos = createVector(random(20, width - 20), height - 20);
    this.mass = 2.0;
  }
  if(mouseIsPressed) {
    displayWords(
      "Saying: *U@(HC*$ QYEc220e8 98q0 ecu929erjfewu9fdY(&*^&T@*E\n Name: (*&@Ye8g"
    );
  }
}

class Figure7 {
  constructor(img,pos,mass) {
    this.img = img7;
    img7.tint(15); //Same as Figure3
    this.pos = createVector(random(25, width - 25), height - 25);
    this.mass = 0.5;
  }
  if(mouseIsPressed) {
    displayWords(
      "Saying:                                    \n Name:          )"
    );
  }
}

function preload() {
  img1 = loadImage("assets/figure1.png");
  img2 = loadImage("assets/figure2.png");
  img3 = loadImage("assets/figure3.png");
  img4 = loadImage("assets/figure4.png");
  img5 = loadImage("assets/figure5.png");
  img6 = loadImage("assets/figure6.png");
  img7 = loadImage("assets/figure7.png");
  flower1 = loadImage("assets/flower1.png");
  flower2 = loadImage("assets/flower2.png");
  cloud = loadImage("assets/cloud.png");
  clickSnd = loadSound("assets/click.mp3");
}

function setup() {
  let canvas = createCanvas(1050, 250);
  canvas.parent("p5-canvas-container");

  img1.resize(40, 40);
  img2.resize(50, 50);
  img3.resize(40, 40);
  img4.resize(40, 40);
  img5.resize(50, 50);
  img6.resize(40, 40);
  img7.resize(50, 50);

  fig1 = new Figure1(img1);
  fig2 = new Figure2(img2);
  fig3 = new Figure3(img3);
  fig4 = new Figure4(img4);
  fig5 = new Figure5(img5);
  fig6 = new Figure6(img6);
  fig7 = new Figure7(img7);

  FiguresArray = [fig1, fig2, fig3, fig4, fig5, fig6, fig7];
  // Move the fig and array parts to the setup() function
}

function draw() {
  background(15);

  let randomFigureIndex = floor(random(FiguresArray.length));
  let newFigure = FiguresArray[randomFigureIndex];

  if (mouseIsPressed) {
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

      let gravity = createVector(0, -0.1);
      gravity.mult(s.mass);
      s.applyForce(gravity);

      s.update();
    }
  }
}
