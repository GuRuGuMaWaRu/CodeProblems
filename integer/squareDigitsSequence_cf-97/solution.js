function squareDigitsSequence(a0) {
  let element = a0;
  let sequence = {};

  while (!Object.prototype.hasOwnProperty.call(sequence, element)) {
    sequence[element] = true;
    element = element
      .toString(10)
      .split("")
      .reduce((total, digit) => {
        return total + Math.pow(+digit, 2);
      }, 0);
  }

  return Object.keys(sequence).length + 1;
}

const v1 = 16; // 9
const v2 = 103; // 4
const v3 = 1; // 2

console.log(squareDigitsSequence(v1));
console.log(squareDigitsSequence(v2));
console.log(squareDigitsSequence(v3));
