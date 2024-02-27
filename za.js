let circleX =100;
let circleY= 100;

function setup() {
  createCanvas(400, 400);
  print(random(0));
  print(random(10));
  print(random(90,100));
}

function draw() {
  background(220);
  loop(0)
  noStroke();
  line(200,0,200,400);
  line(0,200,400,200);
  line(0,100,400,100);
  line(0,300,400,300);
  line(100,0,100,400);
  line(300,0,300,400);

  fill('black');rect(100,100,250,250)
   fill('red');triangle(120,380,220,200,300,380)
   fill('blue');ellipse(mouseX, mouseY,100);
  
  
}