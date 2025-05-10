let images = [];
let index = 0;
let timer = 0;

function preload() {
images[0] = loadImage("plushie1.jpg");
images[1] = loadImage("plushie2.jpg");
images[2] = loadImage("plushie3.jpg");
images[3] = loadImage("plushie4.jpg");
}

function setup() {
createCanvas(windowWidth, windowHeight);
timer = millis();
}

function draw() {
background(0);
image(images[index], 0, 0);
if (millis() - timer > 10000) {
index = (index + 1) % images.length;
timer = millis();
}
}
