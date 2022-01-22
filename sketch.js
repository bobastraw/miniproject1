function setup() {
  createCanvas(windowWidth, windowHeight);
}


console.log("print to console");


function draw() {
  background(0,200,100);

  strokeWeight(4);
  fill('red');
  arc(700, 250, 600, 500, 650, 100 + QUARTER_PI, CHORD);
  
    
  fill(250)
  circle(460,235,35);
  circle(510,140,110);
  circle(550,290,75);
  circle(670,315,35);
  circle(670,200,65);
  circle(670,60,85);
  circle(830,100,50);
  circle(820,255,130);
  circle(900,175,35);
  circle(950,270,55);

  fill(255,204,150);
  rect(580, 335, 230, 230, 20);
  



}