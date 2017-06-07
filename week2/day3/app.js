

var wordIsPalindrom = function(word) {
  var newWord = removeNonChar(word)
  var wordUpper = newWord.toUpperCase()
  var wordUpperReversed = newWord.toUpperCase().split("").reverse().join("")

  return wordUpper === wordUpperReversed;
}


var removeNonChar = function(word) {
  var alphabetArray = "abcdefghijklmnopqrstuvwxyz".toUpperCase().split("")
  var wordUpperArray = word.toUpperCase().split("")
  for (var i = 0; i < wordUpperArray.length; i++) {
    if (!alphabetArray.some(x => x === wordUpperArray[i])) {
      if (i > -1) {
        wordUpperArray.splice(i, 1);
        i--;
      }
    }
  }
  return wordUpperArray.join("")
}


console.log(wordIsPalindrom("aba"));
console.log(wordIsPalindrom("No ‘x’ in&^%$%^&*&^ ‘Nixon’"));
console.log(wordIsPalindrom("No ‘x’ in ‘Nixondasda,,,.,..,.sksjdkasjd’"));
