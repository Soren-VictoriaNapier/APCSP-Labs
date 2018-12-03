//global variables//
var snake;
var food;
var segments;
var w = 20;
var h = 15;
var cols, rows;
//  The setup function function is called once when your program begins
function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(5, 5, 5);
  frameRate(10);
  cols = floor(width/w);
  rows = floor (height/w);
  var x = floor(random(cols))*w;
  var y = floor(random(rows))*w;

  var loc = createVector(y, x);
  var vel = createVector(0, 0);
  snake = new Snake(loc, vel);
  var u = floor(random(cols))*w;
  var v = floor(random(rows))*w;
//snake = new Snake(createVector(width/2, height/2, createVector(1, 0)));//
  food.pickLoc();
}




//  The draw function is called @ 30 fps
function draw() {
  background(2);
  if(snake.loc.dist(food.loc) === 0){
    food.pickLoc();
    snake.addSegment();

  }
snake.run();
food.run();
}

function keyPressed(){
  text(keyCode, 50, 50)
  if(keyCode === UP_ARROW){
    snake.vel = createVector(0, -1*w);
}
if(keyCode === DOWN_ARROW){
  snake.vel = createVector(0, 1*w);
}
if(keyCode === RIGHT_ARROW){
  snake.vel = createVector(1*w, 0);
}
if(keyCode === LEFT_ARROW){
  snake.vel = createVector(-1*w, 0);
}

}
