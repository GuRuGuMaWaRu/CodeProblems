function arrayPacking(a) {
  return parseInt(
    a
      .map(num => num.toString(2).padStart(8, 0))
      .reverse()
      .join(""),
    2
  );
}
