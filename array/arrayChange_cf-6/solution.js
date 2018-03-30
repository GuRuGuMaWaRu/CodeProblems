function arrayChange(inputArray) {
  let steps = 0;

  for (let i = 0, len = inputArray.length; i < len; i++) {
    if (inputArray[i] >= inputArray[i + 1]) {
      const requiredSteps = inputArray[i] - inputArray[i + 1] + 1;
      steps = steps + requiredSteps;
      inputArray[i + 1] = inputArray[i + 1] + requiredSteps;
    }
  }

  return steps;
}
