/*
**  Ball Constructor Function
**  Soren Victoria
**  Aug 20, 2018
*/

function Ball(loc, rad, col){
  // Instance variables
  this.loc = loc;
  this.rad = rad;
  this.col = col;
  // This function calls other functions
  this.run = function(){
    this.update();
    this.render();
  }
  // This function changes the location of the ball
  // by adding speed to x and y
  this.update = function(){
    var mouseLoc = createVector(mouseX, mouseY);
    this.loc = p5.Vector.lerp(this.loc, mouseLoc, .09);
  }

  //checkEdges() reverses speed when the ball touches an edge
  this.checkEdges = function(){
    if(this.locX < 0) this.speedX = -this.speedX;
    if(this.locX > width) this.speedX = -this.speedX;
    if(this.locY < 0) this.speedY = -this.speedY;
    if(this.locY > height) this.speedY = -this.speedY;
  }

  // render() draws the ball at the new location
  this.render = function(){
    fill(11, 89, 33);
    ellipse(this.loc.x, this.loc.y, this.rad, this.rad);
  }

}
