var Coffee = function (coffee, sugar, size, name) {
  this.coffee = coffee
  this.sugar = sugar
  this.size = size
  this.name = name
}


Coffee.prototype.toString = function(){
  wrong_name = ""
  alphabetArray = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("")
  this.name.split("").forEach (function(element, index) {
    if (index == 0){
      wrong_name += alphabetArray[Math.round(Math.random()* 25)]
    } else {
      wrong_name += element
    }
  })
  return_string = wrong_name + "'s " + this.coffee + ", " + this.sugar + ", " + this.size + "."
  return return_string
}
