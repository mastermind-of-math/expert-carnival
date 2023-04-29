function preload(){}
function setup(){
    canvas = createCanvas(1165, 500);
    canvas.position(100, 200);
    video = createCapture(VIDEO);
    video.hide();
    posenet = ml5.poseNet(video, modelLoaded);
    posenet.on("pose", gotPoses);
}
var x = 100;
var y = 100;
var s = 100;

function modelLoaded(){
    console.log("Model is Loaded!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!")
}

function draw(){
    image(video, 0, 0, 582, 500);
    stroke(200, 200, 200);
    fill(200, 200, 200);
    rect(583, 0, 1165, 500);
    fill(0, 0, 128);
    square(x + 583, y, s);
}

function gotPoses(results){
    if(results.length > 0){
        x = results[0].pose.nose.x;
        y = results[0].pose.nose.y;
        s = Math.floor((results[0].pose.leftWrist.x) - (results[0].pose.rightWrist.x));
        console.log(results);
        document.getElementById("class").innerText = "Current Location: " + x + ", " + y + ", Current Size: " + s + " px"
    }
}