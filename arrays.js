var chcolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray (array, element) {
  var newArray = array;
  newArray.unshift(element);
}

function destructivelyAddElementToBeginningOfArray (array, element) {
  array.unshift(element);
}

function addElementToEndOfArray (array, element) {
  var newArray1 = array;
  newArray1.shift(element);
}

function destructivelyAddElementToEndOfArray (array, element) {
  array.shift(element);
}