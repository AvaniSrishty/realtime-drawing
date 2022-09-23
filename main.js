function setup(){
    canvas = createCanvas(400, 300);
    canvas.position(500, 150)

    video = createCapture(VIDEO);
    video.size(400, 250);
    video.position(90, 150)
}