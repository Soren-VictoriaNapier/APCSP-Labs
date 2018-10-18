//  Global variables
var balls = [];
var paddle;
var b1;


// put setup code here
function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(20,20,20);
  loadBalls(12);  //  !!!!!!!!!!  this is a function call
  var loc = createVector(random(width), height-100);
  var col = color(0,0,255);
  paddle = new Paddle(loc, col);

}

function draw() {
    for(var i = 0; i < balls.length; i++){
      balls[i].run();
  }
paddle.run() {
  for(var i = 0, i<balls.length; i++){
    if(balls[i].isColliding()){

      balls.splice(i, 1);
    }
  }
}
//function for the ball//
function loadBalls(numBalls){

    for(var i = 0; i < numBalls; i++){
          var loc = createVector(random(width), random(height));
          var vel = createVector(random(-3,3), random(-3,3));
          var radius = random(20,40);
          var col = color(random(255), random(255), random(255));

          balls.push(new Ball(loc, vel, radius, col));
          }

  function loadPaddle(){
    var loc = createVector(5, 5);
    var col = color(255,0,0);
    paddle.push(new paddle(loc, rad, col))

    }

}
