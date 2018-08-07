function leastFactorial(n) {
  let factorial = 1;

  for (let i = 2; factorial < n; i++) {
    factorial = factorial * i;
  }

  return factorial;
}
