let images = [];
let index = 0;
let timer = 0;

function preload() {
  images[0] = loadImage('images/image1.jpg');
  images[1] = loadImage('images/image2.jpg');
  images[2] = loadImage('images/image3.jpg');
}

function setup() {
  createCanvas(500, 500);
  imageMode(CENTER);
  timer = millis();
}

function draw() {
  background(0);
  image(images[index], width / 2, height / 2, 500, 500);

  if (millis() - timer > 10000) {
    index = (index + 1) % images.length;
    timer = millis();
  }
}
