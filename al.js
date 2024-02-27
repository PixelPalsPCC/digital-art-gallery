let circleX = 195;
let circleY = 112;
let circleWidth = 200;

let squareX = 35;
let squareY = 220;
let squareWidth = 200;
let squareHeight = 200;

let triangleX1 = 0;
let triangleY1 = 0;
let triangleX2 = 0 - triangleX1;
let triangleY2 = 200 - triangleY1;
let triangleX3 = 200 - triangleX1;
let triangleY3 = 200 - triangleY1;

let arrayOfColours = ["saddlebrown", "cornsilk", "green", "azure"];

function setup() {
  createCanvas(windowWidth, windowHeight);
  print("What colour is your circle?");
  strokeWeight(10);
  loop();
  frameRate(1);
}

function draw() {
  background(243, 179, 283);
  shuffle(arrayOfColours, true);
  noStroke();

  point(200, 200);
  line(200, 0, 200, 400);
  line(0, 200, 400, 200);
  line(100, 0, 100, 400);
  line(300, 0, 300, 400);
  line(0, 100, 400, 100);
  line(0, 300, 400, 300);

  fill(arrayOfColours[0]);
  triangleX1 = random(width);
  triangleY1 = random(height);
  triangle(
    triangleX1,
    triangleY1,
    triangleX1 + triangleX2,
    triangleY1 + triangleY2,
    triangleX1 + triangleX3,
    triangleY1 + triangleY3
  );

  fill(arrayOfColours[1]);
  squareWidth = random(width);
  squareHeight = squareWidth;
  rect(random(width), random(height), squareWidth, squareHeight);

  fill(arrayOfColours[2]);
  ellipse(random(width), random(height), random(circleWidth));

  fill(arrayOfColours[int(random(0, 3))]);
  beginShape();
  vertex(random(width), random(height));
  vertex(random(width), random(height));
  vertex(random(width), random(height));
  vertex(random(width), random(height));
  vertex(random(width), random(height));
  endShape();

  print("Message number: " + frameCount);

  print(random());
  print(random(10));
  print(random(90, 100));
}
