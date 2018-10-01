/*
**  Boid Function
**  Soren Victoria
**  Sep 24, 2018
*/

function Boid(location, velocity, radius, col){
  this.loc = location;
  this.vel = velocity;
  this.rad = radius;
  this.col = col;
  this.acc = createVector(.1,0);

  // This function calls other functions
  this.run = function(){
    this.checkEdges();
    this.update();
    this.render();
  }
  //This function changes the location of the Ball
  // By adding speed to x and y
  this.update = function(){


  if(this !== attr){
    var d = this.loc.dist(attr.loc)
    lerp(start, stop, amt)
    var mouseLoc = createVector(mouseX, mouseY);
    this.loc = p5.Vector.lerp(this.loc, mouseLoc, .09)
    }
    if(d < 80){
      var steeringForce = p5.Vector.sub( this.loc, attr.loc);
      steeringForce.normalize();
      steeringForce.mult(0.5);
      this.vel.add(steeringForce);
    }


  }
  this.vel.limit(5);
  this.loc.add(this.vel);
  push() // push or save the current coord system into the stack
      translate(this.loc.x, this.loc.y);
      rotate(someAngle);
      triangle(-5, 0, 5, 0, 0, -15);
  pop()  //  pop or restore the coordianate system from the stack
}




  //checkEdges reverses the speed when the ball touches an edge//
  this.checkEdges = function(){
    if(this.loc.x < 0) this.vel.x = -this.vel.x;
    if(this.loc.x > width) this.vel.x = -this.vel.x;
    if(this.loc.y < 0) this.vel.y = -this.vel.y;
    if(this.loc.y > height) this.vel.y = -this.vel.y;
  }

  this.render = function(){
    fill(this.col);
    ellipse(this.loc.x, this.loc.y, this.rad, this.rad);
    //returns the distance between two objects
var dist = vector1.dist(vector2);
  }



//  end of constructor
