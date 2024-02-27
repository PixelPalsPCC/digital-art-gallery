x = 0;
y = 0;
function setup() {
  createCanvas(400, 400);
  fill(0, 0, 255);
  square(80, 40, 140);
  fill(255, 0, 0);
  triangle(320, 150, 400, 300, 250, 300); //x1,y1, x2,y2, x3,y3
  fill(0, 255,0);
  circle(120, 300, 150);
}

function draw() {
  line(x, 0, x, 400);
  line(0, y, 400, y);
  y = y + 50;
  x = x + 50;
  strokeWeight(0.3)
  redraw();
}