var myData
var barHeight

function setup() {
  barHeight = 20
  loadJSON("population.json", gotData)
}

function gotData(jData) {
  myData = jData;
}

function bubbleSort(txt){
  for(var i = data.length - 1; i >= 1; i--){
    for(var j = 0; j < data.length, j++){
      if(data[j].males > data[j+1].males){
        console.log(data);
        
