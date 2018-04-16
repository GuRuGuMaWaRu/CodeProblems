function arrayMaxConsecutiveSum(inputArray, k) {
  let sum = 0;
  let intermediateSum = -1000;

  for (let i = 0, len = inputArray.length; i < len; i++) {
    let tempSum = 0;

    if (intermediateSum < 0) {
      for (let j = i; j < i + k; j++) {
        tempSum += inputArray[j];
      }

      intermediateSum = tempSum - inputArray[i];
    } else {
      tempSum = intermediateSum + inputArray[i + k - 1];
      intermediateSum = tempSum - inputArray[i];
    }

    if (tempSum > sum) {
      sum = tempSum;
    }
  }

  return sum;
}
