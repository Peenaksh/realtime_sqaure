nose_x = 0
nose_y = 0
difference = 0
right_wrist_x = 0
left_wrist_x = 0

function setup() {
    video = createCapture(VIDEO)
    video.size(550,600)
    canvas = createCanvas(550,600) 
    canvas.position(560.150)
    poseNet = ml5.posenet(video,modelloaded)
    poseNet.on('pose', gotPoses)
}
function draw() {
    background("#66b0fa")
    document.getElementById("square_side").innerHTML = "width and height of a square will be" + difference  + " px"
    fill("#66fa68")
    square(nose_x,nose_x,difference)
}

function modelloaded() {
    console.log("Posenet is initialised")
}