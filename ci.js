let circleX = 200;
let circleY = 300;
function setup() {
  createCanvas(400, 400);
  strokeWeight(10);
  print(random());
  print(random(10));
  print(random(90,100));
}

function draw() {
  background('blue');
  point(200,200);
  //line(x1,y1,x2,y2)
  line(200,0,200,400);
  line(0,200,400,200);
  line(100,0,100,400);
  line(300,0,300,400);
  line(0,100,400,100);
  line(0,300,400,300);
  //triangle(x1,y1,x2,y2,x,y3);
  point(300,0);
  triangle(300,400,400,300,400,400);
  triangle(100,0,0,100,0,0)
  //stroke('blue')
  fill('purple') 
  //rect(x,y,width,height)
  rect(100,100,100,100);
  rect(200,200,100,100);
  //stroke('black')
  //fill('black')
  //ellipse(x,y,width,[height])
  ellipse(50,350,100)
  ellipse(150,250,100,100)
  ellipse(250,150,100,100)
  ellipse(350,50,100,100)
  
}
