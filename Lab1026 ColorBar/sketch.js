//  Global variables
var bars = [];
var numBars = 3;
// put setup code here
function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(239, 167, 218, 20);
  loadBars(numBars)
}

function draw() {
  background(110, 110, 110, 20);

}



function loadBars(nb) {
  for(var i = 0; i < nb; i++){
    //  make loc, w, // HACK:
    var loc =
    var w =
    var h =
    bars.push(new Bar(loc, w, h));
  }

}

function myBubbleSort() {
  
