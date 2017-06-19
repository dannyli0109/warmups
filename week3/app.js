
var makeFakeMap = function(rows, cols) {
  var map = []
  var randomX = Math.floor(Math.random() * cols)
  var randomY = Math.floor(Math.random() * rows)


  for (var i = 0; i < rows; i++) {
    var rowArray = []

    for (var j = 0; j < cols; j++) {
      if (j == randomX && i == randomY) {
        rowArray.push("X")
      } else {
        rowArray.push("A")
      }
    }
    map.push(rowArray)
  }
  return map
}

var map = makeFakeMap(5,5)

var printMap = function(map) {
  var returnString = "["
  returnString += "\n"
  for (var i = 0; i < map.length; i++) {
    returnString += "["
    for (var j = 0; j < map[0].length; j++) {
      returnString += '"' + map[i][j] + '"'

      if (j < map[0].length -1) {
        returnString += ","
      }
    }
    returnString += "]"
    if (i < map.length - 1) {
      returnString += ","
    }
    returnString += "\n"
  }
  returnString += "];"
  return returnString
}
console.log(printMap(map));
