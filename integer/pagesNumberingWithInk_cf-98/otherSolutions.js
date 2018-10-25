function pagesNumberingWithInk(current, numberOfDigits) {
  while (numberOfDigits > 0) {
    numberOfDigits -= current.toString().length;
    current++;
  }
  return numberOfDigits == 0 ? current - 1 : current - 2;
}

/////////////////////////////////////////////////////////
function pagesNumberingWithInk(current, numberOfDigits) {
  while (numberOfDigits >= numDigits(current)) {
    numberOfDigits -= numDigits(current);
    current++;
  }
  return current - 1;
}

function numDigits(n) {
  return 1 + Math.floor(Math.log10(n));
}
