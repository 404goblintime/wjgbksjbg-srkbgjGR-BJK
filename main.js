sound1 = ""
sound2 = ""
function setup(){
    canvas = createCanvas(700,700);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();
}
function draw() {
    image(video, 0, 0, 700, 700)
}
function preload(){
    sound1 = loadSound("mrloverman.mp3");
    sound2 = loadSound("withoutahook.mp3");
}
function play(){
    sound1.play();
}