function secondRightmostZeroBit(n) {
  return Math.pow(
    2,
    n
      .toString(2)
      .split("")
      .reverse()
      .join("")
      .replace(/0/, "")
      .indexOf("0") + 1
  );
}
