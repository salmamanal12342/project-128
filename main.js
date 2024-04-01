song1="";
song2="";
song1_status="";
song2_status="";
leftWristX=0;
leftWristY=0;
rightWristX=0;
rightWristY=0;
function setup(){
    canvas=createCanvas(600,600);
    canvas.center();

    video=createCapture(VIDEO);
    video.hide();
    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);   
}


function gotPoses(results){
    if(results.length>0){
        console.log(results);
        leftWristX=results[0].pose.leftWrist.x;
        leftWristY=results[0].pose.leftWrist.y;
        console.log("leftWristX= "+leftWristX +"leftWristY= "+leftWristY)
        rightWristX=results[0].pose.rightWrist.x;
        rightWristY=results[0].pose.rightWrist.y;
        console.log("rightWristX= "+rightWristX +"rightWristY= "+rightWristY)
    }

}


function modelLoaded(){
    console.log('posenet is initialized');
}

function draw(){
    image(video,0,0,600,600);
}


function preload(){
    song1=loadSound("song1.mp3");
    song2=loadSound("song2.mp3");
}
function play(){
    song.play();
}