/*
**  Boid Function
**  Soren Victoria
**  Sep 24, 2018
*/

function Boid(location, velocity, radius, col){
  this.loc = location;
  this.vel = velocity;
  this.rad = radius;
  this.clr = col;
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
    var d = this.loc.dist(chaser.loc)
    //lerp(start, stop, amt)
    if(d < 280){
      var steeringForce = p5.Vector.sub( this.loc, chaser.loc);
      steeringForce.normalize();
      steeringForce.mult(0.05);
      this.vel.add(steeringForce);
    }
    if(d < 80){
      var steeringForce = p5.Vector.sub( this.loc, chaser.loc);
      steeringForce.normalize();
      steeringForce.mult(0.5);
      this.vel.add(steeringForce);
    }
    this.vel.limit(5);
    this.loc.add(this.vel);
  }


  this.render = function(){
    push() // push or save the current coord system into the stack
      translate(this.loc.x, this.loc.y);
      rotate(this.vel.heading()+PI/2);

      var n = 9;
         fill(this.clr)
      // ellipse(0,5,2*n,2*n);
        //fill(186, 155, 3)
      //triangle(-n, 0, n, 0, 0, -3*n);
      quad(-n, 8, 0, 0, n, 8, 0, -3*n);
    pop()  //  pop or restore the coordianate system from the stack

  }

  //checkEdges reverses the speed when the ball touches an edge//
  this.checkEdges = function(){
    if(this.loc.x < 0) this.vel.x = -this.vel.x;
    if(this.loc.x > width) this.vel.x = -this.vel.x;
    if(this.loc.y < 0) this.vel.y = -this.vel.y;
    if(this.loc.y > height) this.vel.y = -this.vel.y;
  }

  // this.render = function(){
  //   fill(this.clr);
  //   ellipse(this.loc.x, this.loc.y, this.rad, this.rad);
  //   //returns the distance between two objects
  // }



}//  end of constructor
