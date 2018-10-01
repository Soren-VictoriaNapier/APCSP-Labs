/*
**  Ball Constructor Function
**  Soren Victoria
**  Aug 20, 2018
*/

function Ball(location, velocity, radius, col){
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
    if(d < 300){
      var steeringForce = p5.Vector.sub( attr.loc, this.loc);
      steeringForce.normalize();
      steeringForce.mult(0.01);
      this.vel.add(steeringForce);
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
  }


}//  end of constructor
