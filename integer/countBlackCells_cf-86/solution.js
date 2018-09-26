function gcd(x, y) {
  while (y) {
    let temp = y;
    y = x % y;
    x = temp;
  }

  return x;
}

function countBlackCells(n, m) {
  const gcdResult = gcd(n, m);

  if (gcdResult > 1) {
    return m + n - gcdResult + (gcdResult - 1) * 2;
  }
  return m + n - 1;
}

console.log(countBlackCells(66666, 88888));
