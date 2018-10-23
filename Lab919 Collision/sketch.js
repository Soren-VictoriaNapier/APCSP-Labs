//  Global variables
var boids = [];
var chaser;
// put setup code here
function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(239, 167, 218, 20);
  loadBoids(12);  //  !!!!!!!!!!  this is a function call
  var loc = createVector(width/2, height/2);
  var radius = 35;
  var col = color(255,0,0);
  chaser = new Ball(loc,  radius, col);
}

function draw() {
  background(110, 110, 110, 20);
  chaser.run();
  for(var i = 0; i < boids.length; i++){
    boids[i].run();
  }
}

function loadBoids(numBoids){
  for(var i = 0; i < numBoids; i++){
    var loc = createVector(random(width), random(height));
    var vel = createVector(random(-3,3), random(-3,3));
    var radius = random(10,20);
    var col = color(random(150, 255), random(150, 255), random(150, 255));
    boids.push(new Boid(loc, vel, radius, col));
  }

}
