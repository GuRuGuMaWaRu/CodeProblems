function allLongestStrings(inputArray) {
  l = Math.max(...inputArray.map(x => x.length));

  return inputArray.filter(x => x.length == l);
}
