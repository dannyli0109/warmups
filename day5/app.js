var size = 8

for (var i = 0; i < size; i++) {
  var returnString = ""
  for (var j = 0; j < size * 2; j++) {
    if (i % 2 == 0 && j % 2 == 0) {
      returnString += "#"
    } else if (i % 2 == 1 && j % 2 == 1){
      returnString += "#"
    } else {
      returnString += " "
    }
  }
  console.log(returnString);
}
