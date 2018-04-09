function evenDigitsOnly(n) {
  return n
    .toString()
    .split("")
    .map(parseFloat)
    .every(num => num % 2 === 0);
}
