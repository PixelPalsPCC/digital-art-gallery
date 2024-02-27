function setup() {
    createCanvas(400, 400);
  }
  
  function draw() {
    background('lightgrey');
    
    strokeWeight(2);
    stroke(255,255,0)
    line(0,100,400,100)
    //line(0,200,400,200)
    line(0,300,400,300)
    line(100,0,100,400)
    line(300,0,300,400)
    
    strokeWeight(5);
    stroke(255,255,255)
    line(0,200,400,200)
    line(200,0,200,400)
    
    strokeWeight(2);
    stroke(255,255,0)
    fill(50, 55, 100)
    triangle(50,0,0,200,200,150)
    
    strokeWeight(2);
    stroke(255,255,0)
    fill(50, 55, 100)
    rect(235,235,150,150)
    
    let c = map(mouseX, 0, width, 80, 200);
    fill(255, 0, 0);
    noStroke()
    ellipse(width/2, height/2, c, c);
    textSize(60)
    textAlign(CENTER);
    fill(255, 255, 255);
    text('10',width/2, height/1.8);
    
   
  }