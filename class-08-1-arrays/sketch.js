let arr=[1,3,5,10,100,"green","cyan"];

function setup() {
 let canvas = createCanvas(800, 500);
 canvas.parent("p5-canvas-container");

}


function draw() {
    background(220);

    textSize(30);
    //first index is 0
    text(arr[0],100,50)

    arr[0] = 1000;
    text(arr[0],100,100)

    //add a new number to the end of the array
    arr.push(1000);
    text(arr[7],100,150);

    let result=arr[1]+arr[2];
    text(result,100,200);

    let lastIndex=arr.length-1;
    text(arr[lastIndex],100,250);

    //loop through the array
    for (let i=0; i<arr.length; i++) {
        text(arr[i],500,100+i*30);
    }

    noLoop();
}