let sound;
let amp;


function preload() {
 sound = loadSound("assets/song-long.mp3");
}


function setup() {
 let canvas = createCanvas(800, 500);
 canvas.parent("p5-canvas-container");
 background(220);


 amp = new p5.Amplitude();
}


function draw() {
 //background(220);
 background(220, 30);


 let volume = amp.getLevel();
 //let brightness = map(volume, 0, 0.5, 0, 255);
 //fill(brightness);


 let dia = map(volume, 0, 1, 1, 500);


 noStroke();
 fill(0, 255, 255);
 circle(width / 2, height / 2, dia);


 //fill(255, 0, 0);
 //rect(0, 0, dia, 50);


 fill(0);
 textSize(30);
 text(volume.toFixed(2), 100, 100);
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

