let circleX = 200;
let circleY = 300;
let circleWidth = 200;
let squareX = 200;
let squareY = 0;
let squareWidth = 200;
let squareHeight = 200;
let triangleX1 = 0;
let triangleY1 = 0;
let triangleX2 = 0 - triangleX1;
let triangleY2 = 200 - triangleY1;
let triangleX3 = 200 - triangleX1;
let triangleY3 = 200 - triangleY1;
let arrayOfColors = ['red','yellow','blue'];

function setup() {
  createCanvas(400, 400);
  strokeWeight(10);
noLoop();

}

function draw() {
  background('rgb(166,192,137)');
  shuffle(arrayOfColors,true);
  noStroke();
  fill(arrayOfColors[0]);
  ellipse(random(width), random(height), random(circleWidth));
  // ellipse(random(width),random(height), 200);

  point(10,10);
  fill(arrayOfColors[1]);
  //triangle(180,20,130,80,220,80);
  triangleX1 = random(width);
  triangleY1 = random(height);
  triangle(triangleX1, triangleY1, triangleX1 + triangleX2, triangleY1 + triangleY2, triangleX1 + triangleX3, triangleY1 + triangleY3);
  // triangle(random(triangleX1), random(triangleY1), random(triangleX2), random(triangleY2), random(triangleX3), random(triangleY3));
  fill(arrayOfColors[2]);
  squareWidth = random(width);
  squareHeight = squareWidth;
  rect (random(width), random(height), squareWidth, squareHeight);
  //rect(260,160,80,80);
  // rect(random(width), random(height),200,200);
  // line (left x,right x, top y, bottom y);
  line(200,0,200,400);
  line(0,200,400,200);
  line(100,0,100,400);
  line(300,0,300,400);
  line(0,100,400,100);
  line(0,300,400,300);
  //print(random(5));
  int();
  let myVariable = 1;
}
function mouseClicked() 
{
  redraw();
}
  
