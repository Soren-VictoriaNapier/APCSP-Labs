/*
**  ColorBar Constructor Function
**  Soren Victoria
**  Oct  29, 2018
*/

function ColorBar(){
  // Instance variables
  

  // render() draws the ball at the new location
  this.render = function(){
    fill(11, 89, 33);
    ellipse(this.loc.x, this.loc.y, this.rad, this.rad);
  }

}
