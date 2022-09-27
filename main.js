noseX = 0;
noseY = 0;
difference = 0;
rightWristX = 0;
leftWristY = 0;

function setup(){
    canvas = createCanvas(400, 300);
    canvas.position(500, 150)

    video = createCapture(VIDEO);
    video.size(400, 250);
    video.position(90, 150);
    posenet = ml5.poseNet(video, modelLoaded);
    posenet.on("pose", gotPoses);
}

function modelLoaded(){
    console.log("your model is redy to work");
}

function gotPoses(result){
    if(result.length > 0){
        console.log(result);
        noseX = result[0].pose.nose.x;
        noseY = result[0].pose.nose.y;

        leftWristX = result[0].pose.leftWrist.x;
        rightWristX = result[0].pose.rightWrist.x;
        difference = Math.floor(leftWristX - rightWristX);

}

}