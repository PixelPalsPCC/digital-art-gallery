function setup () {
    createCanvas (400, 400);
    print ('shapes and stuff')
  }
  
  function draw() {
    background ('green')
    point (200,200)
    strokeWeight (5)
   
    line (200,0,200,400)
    line (0,200,400,200)
    line (100,0,100,400);
   
    line (300,0,300,400)
    line (0,100,400,100)
    line (0,300,400,300)
   
    
    fill ('red')
    triangle (50,25,50,150,150,100)
    triangle (40,15,40,140,140,90)
  
    fill ('blue')
    rect(180,150,100,100)
    rect(170,140,90,90)
   
    fill ('yellow')
    ellipse (90,280,150)
    ellipse (80,270,140)
    ellipse(mouseX, mouseY,100)
   
  }