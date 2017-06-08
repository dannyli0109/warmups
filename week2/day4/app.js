var message = "FRZDUGV ILH PDQB WLPHV EHIRUH WKHLU GHDWKV, WKH YDOLDQW QHYHU WDVWH RI GHDWK EXW RQFH."

var message10 = "drsc wocckqo"
var shiftParameter = -3



var decode = function(message, para) {
  var alphabets = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("")
  var messageArray = message.toUpperCase().split("")

  for (var num = 0; num < messageArray.length; num ++) {
    if (alphabets.some(x => x === messageArray[num])) {
      var charIndex = alphabets.indexOf(messageArray[num]) + para
      if ((charIndex) > alphabets.length - 1) {
        charIndex = charIndex - alphabets.length
      } else if (charIndex < 0) {
        charIndex = alphabets.length + charIndex
      }
      messageArray.splice(num, 1, alphabets[charIndex])
    }
  }
  return messageArray.join("")
}

console.log(decode(message, -shiftParameter));


var encode = function(message, para) {
  para = -para
  return decode(message, para)
}

var messageEncode = "TWO SYMBOLS KISSING EACH OTHER"

console.log(encode(messageEncode, shiftParameter));
console.log(decode(encode(messageEncode, shiftParameter), shiftParameter));
console.log(decode(message10, -10));
