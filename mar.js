let circleX = 400;
let circleY = 400;
let circleWidth = 200;
let squareX = 200;
let squareY = 0;
let squareWidth = 200;
let squareHeight = 200;

let arrayOfColors = ["red", "yellow", "blue", "coral", "purple"];

let arrayOfColors2 = ["cyan", "pink", "beige"];

let triangleX1 = 0;
let triangleY1 = 0;
let triangleX2 = 0 - triangleX1;
let triangleY2 = 200 - triangleY1;
let triangleX3 = 200 - triangleX1;
let triangleY3 = 200 - triangleY1;

function setup() {
  createCanvas(400, 400);
  loop();
  frameRate(1);
}

function draw() {
  // noStroke();

  background(arrayOfColors2[int(random(0, 3))]);
  shuffle(arrayOfColors, true);
  grid();

  fill(arrayOfColors[0]);
  triangleX1 = random(width);
  trangleY1 = random(height);
  triangle(
    triangleX1,
    triangleY1,
    triangleX1 + triangleX2,
    triangleY1 + triangleY2,
    triangleX1 + triangleX3,
    triangleY1 + triangleY3
  );

  fill(arrayOfColors[1]);
  squareWidth = random(width);
  squareHeight = squareWidth;
  rect(random(width), random(height), squareWidth, squareHeight);
  fill(arrayOfColors[2]);
  ellipse(random(width), random(height), random(width));
  print(random());
  print(int(random(10)));
  print(int(random(90, 100)));

  fill(arrayOfColors[int(random(0, 4))]);
  beginShape();
  vertex(random(width), random(height));
  vertex(random(width), random(height));
  vertex(random(width), random(height));
  vertex(random(width), random(height));
  vertex(random(width), random(height));
  endShape();
}

function grid() {
  line(200, 0, 200, 400);
  line(0, 200, 400, 200);
  line(100, 0, 100, 400);
  line(300, 0, 300, 400);
  line(0, 100, 400, 100);
  line(0, 300, 400, 300);
}
