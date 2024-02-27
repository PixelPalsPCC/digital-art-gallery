let angle = 0.0;
let jitter = 0.0;

function setup() {
  createCanvas(400, 400,);
  rectMode(CENTER);
  
}

function draw() {
  let c0= color(182,204,254);
  background(c0);
  point(200,200);
  
  //draw a grid
  let c= color(0,0,0);
  strokeWeight(5);
  stroke(c);
  line(200, 0, 200, 400);
  line(0, 200, 400, 200);
  line(100, 0, 100, 400);
  line(300, 0, 300, 400);
  line(0, 100, 400, 100);
  line(0, 300, 400, 300);
  
  

  
  //draw a circle, map: mouse position for controlling the size
  const c1= color(243,196,251);
  fill(c1);
  noStroke();
  let c4= map(mouseX, 0, 150, 200, 175);
  let d= map(mouseX, 0, 350, 400, 300);
  fill(c1, c4, 0)
  ellipse(200,200,d, d);

  
  
  //draw a triangle rotate effect
  const c2= color(208,209,255);
  fill(c2);
  noStroke();
  triangle(10,200,200,100,200,300);
 
  
  //draw a rectangle
  if (second() % 8 === 0) {jitter = random(-0.1, 0.1);}
  angle = angle + jitter;
  let c5 = cos(angle);
  translate(100/2, 200/2);
  rotate(c5)
  const c3= color(200,231,255);
  fill(c3);
  noStroke();
  rect(200, 100, 100, 200);
  
 
}