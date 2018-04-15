function extractEachKth(inputArray, k) {
  return inputArray.filter((_, index) => {
    return (index + 1) % k !== 0 ? true : false;
  });
}
