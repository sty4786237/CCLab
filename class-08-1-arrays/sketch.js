let x, y, xSpeed, ySpeed, dia;

function setup() {
    
    let canvas = createCanvas(800, 500);
    canvas.parent("p5-canvas-container");

    x = width / 2;
    y = height / 2;
    xSpeed = random(-2, 2);
    ySpeed = random(-2, 2);
    dia = random(10,30);
}


function draw() {
    background(220);
    x+= xSpeed;
    y+= ySpeed;
    //bounce
    if (x<0 || x > width) {
        xSpeed *= -1;
    }
    if (y<0 || y > height) {
        ySpeed *= -1;
    }
    //draw circle
    circle(x, y, dia);
}