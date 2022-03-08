leftWristX = 0;
rightWristX = 0;

leftWristY = 0;
rightWristY = 0;

songLegend = "";
songLarger = "";

function preload()
{
    songLarger = loadSound("The Realmunks - Larger Than Life.mp3");
    songLegend = loadSound("the-score-legend.mp3");
}

function setup()
{
    canvas = createCanvas(600, 500);
    canvas.center();

    video = createCapture(VIDEO);  
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded()
{
    console.log("PoseNet Is Initialized");
}

function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
        
        leftWristX = results[0].pose.leftWrist.x;
        leftWristY = results[0].pose.leftWrist.y;
        console.info("leftWristX = " + leftWristX + " and leftWristY = " + leftWristY);

        rightWristX = results[0].pose.rightWrist.x;
        rightWristY = results[0].pose.rightWrist.y;
        console.info("rightWristX = " + rightWristX + " and rightWristY = " + rightWristY);
    }
}

function draw()
{
    image(video, 0, 0, 600, 500);

    fill("#FF0000");
    stroke("#FF0000");
}