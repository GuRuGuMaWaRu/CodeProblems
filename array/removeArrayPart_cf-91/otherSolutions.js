function removeArrayPart(inputArray, l, r) {
  var toRemove = r - l + 1;
  inputArray.splice(l, toRemove);
  return inputArray;
}

//////////////////////////////////////////////////////
function removeArrayPart(inputArray, l, r) {
  inputArray.splice(l, r - l + 1);
  return inputArray;
}
