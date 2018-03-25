function sortByHeight(a) {
  const arrayToStr = a.join(",");
  const removedTrees = arrayToStr.replace(/(-1\,)/g, "");
  const arrayWithoutTrees = removedTrees.split(',').sort((a1, a2) => a1 - a2).map(parseFloat);
  let sortedArray = [];

  for (let i = 0, len = a.length; i < len; i++) {
    if (a[i] === -1) {
      sortedArray.push(a[i]);
    } else {
      const takeElement = arrayWithoutTrees.shift();
      sortedArray.push(takeElement);
    }
  }

  return sortedArray;
}
