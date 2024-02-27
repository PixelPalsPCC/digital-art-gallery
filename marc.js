function setup() {
    createCanvas(400, 400);
    strokeWeight(5);
    noLoop();
    }
    
    
    
    function draw() {
    background(220);
    
    //Drawing the square
    line(0, 0, 0, 400);
    line(0, 0, 400, 0);
    line(400, 0, 400, 400);
    line(0, 400, 400, 400);
    
      
    //Draw a circle
    fill(100)
    ellipse(random(400), random(400), 205);
      
    //Draw a triangle
    fill(163,255, 97)
    triangle(200, 80, 120, 230, 290, 230);
      
    //Draw the grid
    line(80, 0, 80, 400)
    line(160, 0, 160, 400)
    line(240, 0, 240, 400)
    line(320, 0, 320, 400)
    line(0, 80, 400, 80)
    line(0, 160, 400, 160)
    line(0,240, 400, 240)
    line(0, 320, 400, 320)
     
    }
    
    function mouseClicked() {
    redraw();
    }
    