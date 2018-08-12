function countSumOfTwoRepresentations2(n, l, r) {
  let count = 0;

  for (let i = l; i <= Math.trunc(n / 2); i++) {
    if (n - i <= r) {
      count += 1;
    }
  }

  return count;
}
