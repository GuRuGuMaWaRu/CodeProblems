function arrayMaximalAdjacentDifference(arr) {
  return Math.max(...arr.slice(1).map((x, i) => Math.abs(x - arr[i])));
}

function arrayMaximalAdjacentDifference(inputArray) {
  a = [];
  for (i = 1; i < inputArray.length; i++) {
    a.push(Math.abs(inputArray[i] - inputArray[i - 1]));
  }
  return Math.max(...a);
}
