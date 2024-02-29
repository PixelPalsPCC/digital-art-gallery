function setup() {
    createCanvas(400, 400);
    strokeWeight(5);
}

function draw() {
    background(220);
    strokeWeight(2);
    point(100, 100);
    line(200, 0, 200, 400);
    line(0, 200, 400, 200);
    line(100, 0, 100, 400);
    line(300, 0, 300, 400);
    line(0, 100, 400, 100);
    line(0, 300, 400, 300);

    fill("navy");
    triangle(0, 0, 0, 150, 150, 100);
    fill("Gold");
    rect(100, 0, 200, 200);
    fill("red");
    ellipse(200, 300, 200);
}