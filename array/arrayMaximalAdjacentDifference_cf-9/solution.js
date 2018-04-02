function arrayMaximalAdjacentDifference(inputArray) {
  let max = 0;

  for (let i = 0, len = inputArray.length; i < len; i++) {
    const difference = Math.abs(inputArray[i] - inputArray[i + 1]);

    if (difference > max) {
      max = difference;
    }
  }

  return max;
}
