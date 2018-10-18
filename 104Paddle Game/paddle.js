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
