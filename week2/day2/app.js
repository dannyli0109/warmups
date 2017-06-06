// bob = [3, 2, 6, 11, 9, 2, 6, 9, 10]
// jimbo = [5, 12, 9, 22, 13, 7, 16, 10, 11]
// fish = [2, 2, 4, 5, 4, 3, 6, 4, 1]

var gofer1 = {
  name: "bob",
  card: [3, 2, 6, 11, 9, 2, 6, 9, 10]
}

var gofer2 = {
  name: "jimbo",
  card: [5, 12, 9, 22, 13, 7, 16, 10, 11]
}

var gofer3 = {
  name: "fish",
  card: [2, 2, 4, 5, 4, 3, 6, 4, 1]
}


var totalScore = function(gofers) {
  for (var i = 0; i < gofers.length; i++) {
    var sum = 0;
    gofers[i].difference = []
    for (var j = 0; j < gofers[i].card.length; j++) {
      sum += gofers[i].card[j];
    }
    gofers[i].score = sum
  }
  return gofers
}

var differencesBetweenPar = function(gofers, par) {
  for (var i = 0; i < gofers.length; i++) {
    gofers[i].difference = []
    for (var j = 0; j < gofers[i].card.length; j++) {
      gofers[i].difference.push(gofers[i].card[j] - par[j])
    }
  }
}


var compare = function(gofers) {
  for (var j = 0; j < 9; j++) {
    var printString = ""
    printString += "Hole" + (j + 1) + ": "
    for (var i = 0; i < gofers.length; i++) {
      printString += gofers[i].name + ": " + gofers[i].card[j] + " "
    }
    console.log(printString);
  }
  return gofers
}


var betMoney = function(gofers){
  var sum = 0
  for (var i = 0; i < gofers.length; i++) {
    for (var j = 0; j < gofers[i].card.length; j++) {
      if (gofers[i].difference[j] > 0) {
        sum += gofers[i].difference[j]
      }
    }
  }
  return sum
}

var myPar = [3, 4, 5, 5, 3, 3, 4, 3, 5]
var gofers = [gofer1, gofer2, gofer3]
totalScore(gofers);
differencesBetweenPar(gofers, myPar)
for (var i = 0; i < gofers.length; i++) {
  console.log(gofers[i].name + ": " + gofers[i].score);
}
console.log(compare(gofers));
console.log("Fish won $" + betMoney([gofer1, gofer2]));
