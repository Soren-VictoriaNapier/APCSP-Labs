function Snake(loc, vel){
  this.loc = loc;
  this.vel = vel;
  this.segments = [];



this.run = function(){
  this.update();
  this.render();
}

this.update = function(){
  this.loc.add(this.vel);
  this.loc.x = constrain(this.loc.x, 0, width-w)
  this.loc.y = constrain(this.loc.y, 0, width-w)
}

this.render = function(){
  fill(255);
  rect(this.loc.x, this.loc.y, w, w);
}
//array for the segments//
this.segments = function(){
  for(var i = 0; i < segments.length; i++){
    var loc = createVector(this.loc.x, this.loc.y, w, w);
    var vel = createVector(this.loc.add(this.vel));
    var col = color(0, 255, 0);
    segments.push(new Segment(loc, vel, col));
  }
}
}
