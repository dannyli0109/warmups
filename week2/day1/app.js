

var grannyTalk = function(question) {
  if (question.toUpperCase() === "BYE") {
    return "What's that honey, I didn't hear you.."
  } else if (question === question.toUpperCase()) {
    var randomYear = Math.floor(Math.random() * (1950 - 1930 + 1)) + 1930
    return "NO, NOT SINCE " + randomYear
  } else {
    return "SPEAK UP SONNY JIM"
  }
}

console.log(grannyTalk("HELLO"))
console.log(grannyTalk("hello"))
console.log(grannyTalk("BYE"));
console.log("");

var vowels = ["A", "E", "I", "O", "U"]
var grandpaTalk = function(question) {
  var returnString = ""
  var grannyResponse = grannyTalk(question)
  for (var num = 0; num < grannyResponse.length; num++) {
    var char = grannyResponse.charAt(num)
    var randomIndex = Math.floor(Math.random() * vowels.length)
    for (var index = 0; index < vowels.length; index++) {
      if (vowels[index].toLowerCase() == char) {
        char = vowels[randomIndex].toLowerCase()
      } else if (vowels[index] == char) {
        char = vowels[randomIndex]
      }
    }
    returnString += char
  }
  return returnString
}
console.log(grandpaTalk("Hello"))
console.log(grandpaTalk("HELLO"))
console.log(grandpaTalk("bye"))
