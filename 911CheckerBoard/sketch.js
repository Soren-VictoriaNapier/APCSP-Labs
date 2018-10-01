/*
**Lab 911:CheckerBoard
**
**
*/


//  Global variables
var squares = [];
var squareSize;
var numSquares = 8;
// Declare squares[] as a global variable


// put setup code here
function setup() {
  var cnv = createCanvas(800, 800);
  squareSize = width/numSquares;
  cnv.position((windowWidth-width)/2, 30);
  background(235);
  // Create a function that loads the squares into an
  // array of square objects and call the function
  loadSquares(8);
  //  traverse array and run each square
  for(var i = 0; i < squares.length; i++){
     squares[i].render();
  }
}



function loadSquares(numSquares){
  for(var row = 0; row < numSquares; row++){
    for(var col = 0; col < numSquares; col++){
      var loc = createVector(row*squareSize, col);
      var clr = color(random(255), random(255), random(255));
      squares.push(new Sqr(loc, clr, squareSize));
    }

    }

}
