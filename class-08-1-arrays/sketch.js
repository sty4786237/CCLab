let colors = [
 "Aquamarine",
 "Chartreuse",
 "CornflowerBlue",
 "Cornsilk",
 "DarkOrchid",
 "DarkTurquoise",
 "DeepPink",
 "DodgerBlue",
 "FireBrick",
]; // array!


function setup() {
 let canvas = createCanvas(800, 500);
 canvas.parent("p5-canvas-container");

 //array.push() adds an element to the end of the array
 //array.splice(index, count) removes 'count' elements from the array starting at 'index'
 //array.length gives the number of elements in the array
 //array[index] accesses the element at the specified index 
 
 colors.push("Gold");
 colors.splice(2, 1); // removes the single element at index 2 (CornflowerBlue)
 colors.push("LightCoral");

}


function draw() {
 background(220);


 for (let i = 0; i < colors.length; i++) {
   let rectH = 50;
   let x = 0;
   let y = 0 + i * rectH;


   noStroke();
   fill(colors[i]);
   rect(x, y, width, rectH);


   textSize(30);
   fill(255);
   text(colors[i], x + 20, y + 30);
 }
}
// This is a simple sketch that draws rectangles of different colors
// and displays the color names on top of them.
// The colors are stored in an array, and the sketch iterates through
// the array to draw each rectangle and its corresponding name.
// The rectangles are evenly spaced vertically, and the text is centered
// within each rectangle.           
