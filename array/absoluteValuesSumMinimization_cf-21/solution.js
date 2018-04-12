function absoluteValuesSumMinimization(a) {
  let result = 0;
  let lowestSum = Number.MAX_SAFE_INTEGER;

  for (let num of a) {
    let sum = 0;

    for (let baseNum of a) {
      sum += Math.abs(baseNum - num);
    }

    if (sum < lowestSum) {
      lowestSum = sum;
      result = num;
    }
  }

  return result;
}
