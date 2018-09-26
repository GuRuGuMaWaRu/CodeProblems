function countBlackCells(n, m) {
  var gcd = (a, b) => (b == 0 ? a : gcd(b, a % b));
  return n + m + gcd(n, m) - 2;
}

////////////////////////////////
