let sound;


function preload() {
 sound = loadSound("assets/song-long.mp3");
}


function setup() {
 let canvas = createCanvas(800, 500);
 canvas.parent("p5-canvas-container");
}


function draw() {
 background(220);


 let volValue = map(mouseY, 0, height, 1.0, 0.0, true);
 //sound.setVolume(volValue);


 let panValue = map(mouseX, 0, width, -1.0, 1.0, true);
 //sound.pan(panValue); // center: 0, left: -1, right: 100%


 let rateValue = map(mouseY, 0, height, 2.0, 0.01, true);
 //sound.rate(rateValue); // % value
}


function mousePressed() {
 if (sound.isPlaying()) {
   //sound.pause();
   sound.stop(); // start over
 } else {
   //sound.play();
   sound.loop();
 }
}
