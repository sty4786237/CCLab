let figureData = [
  // #1
  {
    img: null,
    saying: "Saying: \"Tomorrow will be my 700th birthday, wish the network works well\"\n Name: Axis-07",
    mass: 2.0,
    size: 40
  },
  // #2
  {
    img: null,
    saying: "Saying: 0010101001010100101010101010101010101010101010101\n Name: 01000100010001",
    mass: 2.5,
    size: 50
  },
  // #3
  {
    img: null,
    saying: "Saying:_________________________________\n Name: __________",
    mass: 1.5,
    size: 40
  },
  // #4
  {
    img: null,
    saying: "Saying: System overload... requesting assistance from external processes...\n Name: Cache_Handler",
    mass: 2.0,
    size: 40
  },
  // #5
  {
    img: null,
    saying: "Saying: There might be something wrong…\n Name: MagnetX",
    mass: 2.5,
    size: 50
  },
  // #6
  {
    img: null,
    saying: "Saying: *U@(HC*$ QYEc220e8 98q0 ecu929erjfewu9fdY(&*^&T@*E\n Name: (*&@Ye8g",
    mass: 2.0,
    size: 40
  },
  // #7
  {
    img: null,
    saying: "Saying:                                    \n Name:               ",
    mass: 1.5,
    size: 50
  },
];

let flower1, flower2, cloud, clickSnd;
let figures = [];

function preload() {
  figureData[0].img = loadImage("assets/figure1.png");
  figureData[1].img = loadImage("assets/figure2.png");
  figureData[2].img = loadImage("assets/figure3.png");
  figureData[3].img = loadImage("assets/figure4.png");
  figureData[4].img = loadImage("assets/figure5.png");
  figureData[5].img = loadImage("assets/figure6.png");
  figureData[6].img = loadImage("assets/figure7.png");

  flower1 = loadImage("assets/flower1.png");
  flower2 = loadImage("assets/flower2.png");
  cloud = loadImage("assets/cloud.png");
  clickSnd = loadSound("assets/click.mp3");
}

function setup() {
  let canvas = createCanvas(1050, 250);
  canvas.parent("p5-canvas-container");

  for (let i = 0; i < figureData.length; i++) {
    let figure = figureData[i];
    figure.img.resize(figure.size, figure.size);
  }
}

function draw() {
  background(50);

  for (let i = 0; i < figures.length; i++) {
    let f = figures[i];
    
    // walking behavior
    f.move();
    
    // update
    let gravity = createVector(0, 0.1);
    gravity.mult(f.mass);
    f.applyForce(gravity);

    f.update();

    // compare and check
    f.checkEdges();

    // display!
    f.display();
    
    // display message if showing
    f.displayWords();
  }
}

function mousePressed() {

  // if you press on figures, it jumps or show saying
  let clicked = false;
  for (let i = 0; i < figures.length; i++) {
    let f = figures[i];
    let mousePos = createVector(mouseX, mouseY);
    let distance = mousePos.dist(f.pos);
    if (distance < 30) {
      f.jump();
      f.showMessage(); // Show message when jumping
      clicked = true;
    }
  }

  // otherwise, add more figures
  if (!clicked) {
    // get new figure data
    let newFigureData = random(figureData);

    let newFigure = new Figure(
      newFigureData.img,
      newFigureData.saying,
      newFigureData.mass,
      newFigureData.size,
    );
    newFigure.pos.x = mouseX;
    newFigure.pos.y = mouseY;

    // add to the array
    figures.push(newFigure);

    // limit 
    if (figures.length > 8) {
      figures.splice(0, 1);
    }
  }

}

class Figure {
  constructor(img, saying, mass, size) {
    this.img = img;
    this.saying = saying;
    this.mass = mass;
    this.size = size;
    //
    this.pos = createVector(0, 0);
    this.vel = createVector(0, 0);
    this.acc = createVector(0, 0);

    // Moving properties
    this.moveSpeed = random(0.2, 0.8);
    this.moveDirection = random([-1, 1]);
    this.onGround = false;
    
    // Message display properties
    this.showingMessage = false;
    this.messageTimer = 0;
    this.messageDuration = 180; // 3 seconds at 60fps
  }
  
  move() {
    // Only walk when on ground
    if (this.onGround) {
        this.vel.x = this.moveDirection * this.moveSpeed;

      // Randomly change direction
      if (random() < 0.005) {
        this.moveDirection *= -1;
      }
    }
  }
  
  display() {
    push();
    imageMode(CENTER);
    image(this.img, this.pos.x, this.pos.y);
    pop();
  }
  
  applyForce(force) {
    // don't touch this!!
    let f = p5.Vector.div(force, this.mass);
    this.acc.add(f);
  }
  
  update() {
    // don't touch this!!
    this.vel.add(this.acc);
    this.pos.add(this.vel);
    this.acc.mult(0);
    
    // Update message timer
    if (this.showingMessage) {
      this.messageTimer--;
      if (this.messageTimer <= 0) {
        this.showingMessage = false;
      }
    }
  }
  
  checkEdges() {
    if (this.pos.x > width) {
      this.pos.x = width;
      this.vel.x *= -1;
      this.moveDirection *= -1; 
    } else if (this.pos.x < 0) {
      this.pos.x = 0;
      this.vel.x *= -1;
      this.moveDirection *= -1;
    }
    
    if (this.pos.y > height - 30) {
      this.pos.y = height - 30;
      this.vel.y = 0;
      this.onGround = true; 
    } else {
      this.onGround = false;
    }
  }
  
  jump() {
    let force = createVector(0, -5);
    this.applyForce(force);
    this.onGround = false;
  }
  
  showMessage() {
    this.showingMessage = true;
    this.messageTimer = this.messageDuration;
    if (clickSnd) {
      clickSnd.play();
    }
  }
  
  displayWords() {
    if (this.showingMessage) {
      push();
      translate(this.pos.x, this.pos.y - 70);
      textAlign(CENTER);
      textSize(10);
      fill(255);
      stroke(0);
      strokeWeight(1);
      text(this.saying, 0, 0);
      pop();
    }
  }
}