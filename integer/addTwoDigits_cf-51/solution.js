function addTwoDigits(n) {
  return String(n)
    .split("")
    .map(parseFloat)
    .reduce((total, number) => total + number);
}
