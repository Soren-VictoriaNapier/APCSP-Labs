function Snake(loc, vel){
  this.loc = loc;
  this.vel = vel;
  this.segments = [];
  this.segments.push(createVector(0, 0));


  this.addSegment = function(){
    this.segments.push(createVector(0,0));
  }



  this.run = function(){
    this.update();
    this.render();
  }

  this.update = function(){
    console.log("length = " + this.segments.length);
    for(var i= this.segments.length - 1 ; i > 0; i--){
      this.segments[i].x = this.segments [i-1].x ;
      this.segments[i].y =  this.segments[i-1].y ;
    }
    this.segments[0].x = this.loc.x
    this.segments[0].y = this.loc.y


    this.loc.add(this.vel);
    this.loc.x = constrain(this.loc.x, 0, width-w)
    this.loc.y = constrain(this.loc.y, 0, width-w)

  }



  this.render = function(){
    fill(255);
    rect(this.loc.x, this.loc.y, w, w);
  }
  //array for the segments//
  // this.segments = function(){
  //   for(var i = 0; i < segments.length; i++){
  //     var loc = createVector(this.loc.x, this.loc.y, w, w);
  //     var vel = createVector(this.loc.add(this.vel));
  //     var col = color(0, 255, 0);
  //     segments.push(new Segment(loc, vel, col));
  //   }
  // }
}//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
