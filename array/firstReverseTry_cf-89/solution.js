function firstReverseTry(arr) {
  if (arr.length < 2) {
    return arr;
  }
  return [arr[arr.length - 1], ...arr.slice(1, -1), arr[0]];
}

console.log(firstReverseTry([1, 2, 3, 4, 5]));
