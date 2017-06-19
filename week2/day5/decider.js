var coin = document.querySelector(".coinImage")
var result = document.querySelector(".result")
var displayText = document.querySelector(".displayText")
var head = {
  name: "head",
  count: 0,
  counter: document.querySelectorAll(".counter")[0]
}

var tail = {
  name: "tail",
  count: 0,
  counter: document.querySelectorAll(".counter")[1]

}

var winRound = 5;


var coinFlip = function() {
  var ran = Math.round(Math.random())
  if (ran === 0) {
    head.count ++;
    result.textContent = "result: " + head.name;
    head.counter.textContent = head.count;
    coin.src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/Star_coin.png/604px-Star_coin.png"
    console.log(head.name);
  } else {
    tail.count ++;
    result.textContent = "result: " + tail.name
    tail.counter.textContent = tail.count;
    coin.src = "http://www.clker.com/cliparts/1/a/k/u/I/d/coin-md.png"

    console.log(tail.name);
  }
  checkWinner()
}

var checkWinner = function() {
  if (head.count >= winRound) {
    console.log("WINNER: " + head.name);
    head.count = 0;
    tail.count = 0;
    head.counter.textContent = 0;
    tail.counter.textContent = 0;
    displayText.textContent = "WINNER: " + head.name
  } else if (tail.count >= winRound) {
    console.log("WINNER: " + tail.name);
    head.count = 0;
    tail.count = 0;
    head.counter.textContent = 0;
    tail.counter.textContent = 0;

    displayText.textContent = "WINNER: " + tail.name
  } else {
    displayText.textContent = ""
  }
}



coin.addEventListener("click", coinFlip)
