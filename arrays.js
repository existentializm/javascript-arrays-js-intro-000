var chcolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray (array, element) {
  var newArray = array;
  return newArray.unshift(element);
}

function destructivelyAddElementToBeginningOfArray (array, element) {
  return array.unshift(element);
}

function addElementToEndOfArray (array, element) {
  var newArray1 = array;
  return newArray1.push(element);
}

function destructivelyAddElementToEndOfArray (array, element) {
  return array.push(element);
}

function accessElementInArray (array, index) {
  return array[index];
}
