// 1
var date = new Date();

for (var num = 1; num <= 200; num ++) {
  var checkYear = date.getFullYear() - num;
  if (checkYear % 100  == 0) {
    if (checkYear % 400 == 0) {
      console.log(checkYear + " is leap year");
    }
  } else if (checkYear % 4 == 0) {
    console.log(checkYear + " is leap year");
  }
}

// 2
var count = 2
for (var num = 0; num <= 200; num ++) {
  if (num == 0) {
    continue;
  }
  var returnString = "";

  if (num % 7 == 0) {
    returnString += " is multiple of 7|"
  }
  if (num % 2 == 1) {
    if (count == 2) {
      count = 1;
      returnString += " is the second odd number|";
    } else {
      count ++
    }
  }
  var notPrimeCount = 0
  for (var prime = 2; prime < num; prime ++) {

    if (num % prime == 0) {
      notPrimeCount ++;
    }

    if (prime == (num -1)) {
      if (notPrimeCount == 0) {
        returnString += " is a prime number"
      }
    }
  }
  if (returnString != "") {
    console.log(num + returnString);
  }
}
