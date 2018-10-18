

/*
//
//
//
*/

function Ball(l, v, r, c){
//  Ball properites
  this.acc = createVector(0, .1);
   this.loc = l;
   this.vel = createVector(-3,3), random(-3,3));
   this.vel = v;
   this.rad = r;
   this.clr = c;

//  ball functions
    this.update = function(){

    }

    this.checkEdges = function(){
      if(this.locX < 0) this.speedX = -this.speedX;
      if(this.locX > width) this.speedX = -this.speedX;
      if(this.locY < 0) this.speedY = -this.speedY;
      if(this.locY > height) this.speedY = -this.speedY;
    }

    this.render = function(){
      fill(this.clr);
      ellipse(this.loc.x, this.loc.y, this.rad, this.rad);
    }


}
