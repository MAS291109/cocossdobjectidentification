img = ""; 
status = "";

function preload(){
    img = loadImage('dog_cat.jpg'); 
}

function setup(){
    canvas = createCanvas(500,350);
    canvas.center();
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status : Detecting Objects";
}

function modelLoaded(){
    console.log("Model Loaded")
    status = true;
    objectDetector.detect(img, gotResult);
}

function gotResult(error,results){
    if(error){
        console.log(error);
    }
    console.log(results);
}


function draw(){
    image(img, 0, 0, 500, 350);
    fill("#FF0000");
    text("Dog", 40, 75);
    noFill();
    stroke("#FF0000");
    rect(35, 50, 370, 290);

    fill("#FF0000");
    text("Cat", 240, 80);
    noFill();
    stroke("#FF0000");
    rect(230, 60, 200, 250);
}
