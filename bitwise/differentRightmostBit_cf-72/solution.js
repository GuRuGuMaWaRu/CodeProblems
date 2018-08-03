function differentRightmostBit(n, m) {
  return Math.pow(
    2,
    (n ^ m)
      .toString(2)
      .split("")
      .reverse()
      .join("")
      .indexOf(1)
  );
  // return m.toString(2);
}

n1 = 11;
m1 = 13;

console.log(differentRightmostBit(n1, m1));
