img = ""; 

function preload(){
    img = loadImage('dog_cat.jpg'); 
}

function setup(){
    canvas = createCanvas(500,350);
    canvas.center();
}

function draw(){
    image(img, 0, 0, 500, 350);
    fill("#FF0000");
    text("Dog", 40, 75);
    noFill();
    stroke("#FF0000");
    rect(35, 50, 370, 290);
}
