var map1 = [
  ["A","A","A","A","A"],
  ["A","A","A","A","A"],
  ["A","A","X","A","A"],
  ["A","A","A","A","A"],
  ["A","A","A","A","A"]
];

var map2 = [
  ["A","A","A","A","A"],
  ["A","A","A","A","A"],
  ["A","A","A","A","A"],
  ["A","A","A","A","A"],
  ["A","X","A","A","A"]
];

var map3 = [
  ["A","A","A","A","A"],
  ["A","A","V","A","A"],
  ["A","A","A","V","A"],
  ["v","v","V","v","X"],
  ["A","V","A","A","A"]
];

var map4 = [
  ["A","A","A","A","A"],
  ["A","A","V","A","A"],
  ["A","A","A","V","A"],
  ["v","v","V","v","A"],
  ["X","V","A","A","A"]
];

var holyGrailMap = [
  ["v","v","V","v","S","S"],
  ["v","v","V","v","S","S"],
  ["v","v","V","v","S","S"],
  ["v","v","V","v","S","S"],
  ["v","v","G","v","S","S"],
  ["v","v","H","v","S","S"],
  ["v","v","V","v","S","S"],
  ["A","V","A","A","A","S"]
];



var treasureFinder = function(array) {
  for (var i = 0; i < array.length; i++) {
    var indexOfX = array[i].indexOf("X")
    if (indexOfX !== -1) {
      return [i, indexOfX]
    }
  }
  return false;
}

var treasureFinder2 = function(array, key) {
  var keyCount = 0;
  var keyCoordinates = [];
  for (var i = 0; i < array.length; i++) {
    for (var j = 0; j < array[i].length; j++) {
      if (array[i][j] === key) {
        keyCount ++;
        keyCoordinates = [i,j]
      }
    }
  }
  if (keyCount == 1) {
    return keyCoordinates
  }
  return "that doesnt belong in a museum!"
}

console.log(treasureFinder(map1));
console.log(treasureFinder(map2));
console.log(treasureFinder(map3));
console.log(treasureFinder(map4));
console.log("");
console.log(treasureFinder2(holyGrailMap, "G"));
console.log(treasureFinder2(holyGrailMap, "H"));
console.log(treasureFinder2(holyGrailMap, "V"));
console.log(treasureFinder2(holyGrailMap, "S"));
