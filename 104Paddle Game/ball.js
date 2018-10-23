

/*
//
//
//
*/

function Ball(l, v, r, c){
//  Ball properites
  this.acc = createVector(0, .1);
   this.loc = l;
<<<<<<< HEAD
   this.vel = createVector(random(-3,3), random(-3,3));
=======
   this.vel = createVector(-3,3), random(-3,3));
>>>>>>> 5c14d48b8a029eb92e4d76e14c3fdf5960698a50
   this.vel = v;
   this.rad = r;
   this.clr = c;

<<<<<<< HEAD
//This function calls other functions//
this.run = function(){
  this.checkEdges();
  this.update();
  this.render();
}

//  ball functions
    this.update = function(){
      this.vel.add(this.acc);
      this.loc.add(this.vel);


    }
//checkEdges resets the ball's speed when it touches the edge of the canvas//
    this.checkEdges = function(){
      if(this.locX < 0) this.vel.x = -this.vel.x;
      if(this.locX > width) this.vel.x = -this.vel.x;
      if(this.locY < 0) this.vel.y = -this.vel.y;
      if(this.locY > height) this.vel.y = -this.vel.y;
=======
//  ball functions
    this.update = function(){

    }

    this.checkEdges = function(){
      if(this.locX < 0) this.speedX = -this.speedX;
      if(this.locX > width) this.speedX = -this.speedX;
      if(this.locY < 0) this.speedY = -this.speedY;
      if(this.locY > height) this.speedY = -this.speedY;
>>>>>>> 5c14d48b8a029eb92e4d76e14c3fdf5960698a50
    }

    this.render = function(){
      fill(this.clr);
      ellipse(this.loc.x, this.loc.y, this.rad, this.rad);
    }
<<<<<<< HEAD
//this function makes sure that the ball is hitting the paddle//
this.isColliding = function(){
}
=======

>>>>>>> 5c14d48b8a029eb92e4d76e14c3fdf5960698a50

}
