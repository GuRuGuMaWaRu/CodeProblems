function arrayMaxConsecutiveSum(inputArray, k) {
  var result = 0,
    currentSum = 0;

  for (var i = 0; i < k - 1; i++) {
    currentSum += inputArray[i];
  }
  for (var i = k - 1; i < inputArray.length; i++) {
    currentSum += inputArray[i];
    if (currentSum > result) {
      result = currentSum;
    }
    currentSum -= inputArray[i - k + 1];
  }

  return result;
}

//////////////////////////////////

function arrayMaxConsecutiveSum(inputArray, k) {
  s = 0;
  for (j = k; j; j--) m = s += inputArray[inputArray.length - j];
  for (i = inputArray.length; i-- > k; )
    m = Math.max(m, (s += inputArray[i - k] - inputArray[i]));
  return m;
}
