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
