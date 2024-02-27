function setup(){
    createCanvas(400, 400);
    }
    
    function draw(){
      background('lightblue');
      point(100,100);
      strokeWeight(3);
      line(200, 0, 200, 400);
      line(0, 200, 400, 200);
      line(100, 0, 100, 400);
      line( 300, 0, 300, 400);
      line(0, 100, 400, 100);
      line(0, 300, 400, 300);
    
        fill('Darkblue');
      triangle(100,50, 0, 125, 100, 200);
        fill('Purple');
      rect(110, 250, 230, 110);
        fill('green')
      ellipse(280, 100, 100)
    }
    