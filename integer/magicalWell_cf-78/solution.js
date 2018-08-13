function magicalWell(a, b, n) {
  let total = 0;

  for (let i = 0; i < n; i++) {
    total = total + a * b;
    a += 1;
    b += 1;
  }

  return total;
}
