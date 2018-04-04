function avoidObstacles(inputArray) {
  const sortedArray = inputArray.sort();
  let jumpLen = 2;

  while (true) {
    const jumpedThrough = sortedArray.every(
      obstacle => obstacle % jumpLen !== 0
    );
    if (jumpedThrough) return jumpLen;
    jumpLen += 1;
  }
}
