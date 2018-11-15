/*
**  ColorBar Constructor Function
**  Soren Victoria
**  Oct  29, 2018
*/

function ColorBar(location, w, h ){
  // Instance variables
  this.loc = location;
  this.h = h;
  this.w = w;
  this.r = random(255);
  this.g = random(255);
  this.b = random(255);
  this.clr = color(this.r, this.g, this.b);

  // render() draws the ball at the new location
  this.render = function(){
    fill(this.clr);
    ellipse(this.loc.x, this.loc.y, this.w, this.h);
  }

}
