function setup() {
    createCanvas(400, 400);
    background('cyan');
    print('hello world');
    print('hi');
    
    strokeWeight(5)
    print('good morning')
    
    
  }
  
  function draw() {
      
    point(300,300);
    
    frameRate(30);
    
    strokeWeight(2);
    print('pixel');
    
  
    push()
    translate(300,100);
    fill('yellow')
    rect(-20, 200, 55, 55,20,10,20,10); //rounded corners added
    // describe('A white rectangle with a black outline on a gray canvas.');
    
    triangle(30, 75, 58, 20, 86, 75);
    pop()
    
    fill(255, 204, 0);
    
    strokeWeight(10);
    stroke(51, 30, 102);
    line(40,50,130,300);
    
  
    let rand=int(random(5,10))
    print(rand);
    
    
    
  
    stroke('orange');
    fill('red')
    
    push();
    translate(100, 200);
    ellipse(0,0,100,50);
    pop();
    
    rectMode(CENTER);
    rect(200,200,40,70);
    
    noStroke();
    fill('purple');
    ellipse(320,200,30,30);
  }
  
  
  function draw2(){
    strokeWeight(23);
    line(40,50,130,300);
  }
  
  function rail() {
    console.log('hello world');
    // strokeWeight(30);
    // line(0,0,300,200);
  }
  
  rail();
  
  
  
  
  let myName='Jason';
  function sayHello(name) {
    console.log('Hello ' + name + '!');
    // print('welcome');
  }
  
  sayHello(myName);
  
  
  function hello(){
    // print('hi');
    console.log('hi');
    console.warn('attention')
    sayHello(myName);
  }
  
  hello();
  
  
  
  
  
  