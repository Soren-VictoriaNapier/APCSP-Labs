<<<<<<< HEAD
//paddle constructor functions//
//Soren Victoria//
function Paddle(loc, col, w, h){
//  paddle properites
   this.loc = loc;
   this.col = col;
   this.w = w;
   this.h = h;
//paddle functions//
this.run = function(){
  this.update();
  this.render();
}

   this.update = function(){
     this.loc.x = lerp(this.loc.x, mouseX, 0.05);
   }


   this.render = function(){
     fill(this.col);
     rectangle(this.loc.x, this.loc.y, this.w, this.h);
   }


 }
=======
//paddle constructor functions//
//Soren Victoria//
function Paddle(loc, col){
//  paddle properites
   this.loc = l;
   this.col = c;
//paddle functions//

   this.update = function(){
paddle
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
>>>>>>> 5c14d48b8a029eb92e4d76e14c3fdf5960698a50
