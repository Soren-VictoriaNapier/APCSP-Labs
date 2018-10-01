//  Global variables
var balls = [];
var attr;

// put setup code here
function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(20,20,20, 20);
  loadBalls(12);  //  !!!!!!!!!!  this is a function call
}

function draw() {
  background(20,20,20, 20);
  attr.run();
    for(var i = 0; i < balls.length; i++){
      balls[i].run();
  }


}

function loadBalls(numBalls){

    for(var i = 0; i < numBalls; i++){
          var loc = createVector(random(width), random(height));
          var vel = createVector(random(-3,3), random(-3,3));
          var radius = random(10,20);
          var col = color(random(255), random(255), random(255));

          balls.push(new Ball(loc, vel, radius, col));
      }

var loc = createVector(width/2, height/2);
var vel = createVector(0,0);
var radius = 55;
var col = color(255,0,0);
attr = new Ball(loc, vel, radius, col);
}
