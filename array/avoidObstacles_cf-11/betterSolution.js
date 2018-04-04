function avoidObstacles(arr) {
  for (var n = 1; ; n++) if (arr.every(x => x % n)) return n;
}

A = avoidObstacles = (a, j) => (
  //increment j
  (j = -~j),
  //check for any elements not divisible by j
  //if we find one, try the next j
  //otherwise, we found the answer
  a.every(e => e % j) ? j : A(a, j)
);
