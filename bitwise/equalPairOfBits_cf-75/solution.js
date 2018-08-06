function equalPairOfBits(n, m) {
  return Math.pow(
    2,
    (~n ^ m)
      .toString(2)
      .split("")
      .reverse()
      .join("")
      .indexOf(1)
  );
}

n = [10];
m = [11];

console.log(equalPairOfBits(n[0], m[0]));
