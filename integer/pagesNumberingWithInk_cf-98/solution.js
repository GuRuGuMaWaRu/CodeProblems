function pagesNumberingWithInk(current, numberOfDigits) {
  let range = 10;

  while (numberOfDigits > 0) {
    if (range - current > 0) {
      // we have the RIGHT range

      // how many digits we have left?
      let rangeLength = String(range).length; // 2
      let digitsUntilNextRange = (range - current) * (rangeLength - 1); // 9
      if (numberOfDigits - digitsUntilNextRange >= 0) {
        current = range; // 100
        numberOfDigits = numberOfDigits - digitsUntilNextRange; // 199
      } else {
        current =
          current + Math.floor(numberOfDigits / (rangeLength - 1)) - 1 >= range
            ? range - 1
            : current + Math.floor(numberOfDigits / (rangeLength - 1)) - 1;
        numberOfDigits = 0;
      }
    } else {
      // we have the WRONG range
      range = range * 10;
    }
  }

  return current;
}

const v1 = [1, 5]; // 5
const v2 = [21, 5]; // 22
const v3 = [8, 4]; // 10
const v4 = [76, 250]; // 166
const v5 = [80, 1000]; // 419

console.log(pagesNumberingWithInk(...v1));
console.log(pagesNumberingWithInk(...v2));
console.log(pagesNumberingWithInk(...v3));
console.log(pagesNumberingWithInk(...v4));
console.log(pagesNumberingWithInk(...v5));
