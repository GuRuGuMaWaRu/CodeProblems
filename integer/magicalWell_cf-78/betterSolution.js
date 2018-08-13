function magicalWell(a, b, n) {
  var magic = (d, x) => x * (x - 1) * (2 * (x + 2 - d) + 5 * (d - 1)) / 6;
  var max = Math.max(a, b),
    min = Math.min(a, b),
    difference = max - min;
  return magic(difference, min + n) - magic(difference, min);
}

//////////////////////////////////

const magicalWell = (a, b, n) =>
  [...Array(n)].reduce(sum => (sum += a++ * b++), 0);
