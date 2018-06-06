function killKthBit(n, k) {
  return Number.parseInt(
    n
      .toString(2)
      .split("")
      .reverse()
      .map((digit, i) => {
        if (i === k - 1) {
          return "0";
        }
        return digit;
      })
      .reverse()
      .join(""),
    2
  );
}
