var chcolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray (array, element) {
  var newArray = array;
  newArray.unshift(element);
}

function destructivelyAddElementToBeginningOfArray (array, element) {
  array.unshift(element);
}