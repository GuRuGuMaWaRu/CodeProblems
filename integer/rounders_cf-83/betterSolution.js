function rounders(value) {
  var powerOfTen = Math.pow(10, Math.floor(Math.log10(value))),
    insignificantDigits = value % powerOfTen,
    threshold = 4 / 9 * powerOfTen,
    carry = insignificantDigits > threshold ? powerOfTen : 0;
  return value - insignificantDigits + carry;
}

///////////////////////////////
function rounders(value) {
  var r = 0;
  while (value > 10) {
    // console.log("r:", r);
    // console.log("value:", value);
    value = Math.round(value / 10);
    r++;
  }
  // console.log("final value:", value);
  // console.log("final r:", r);
  return value * Math.pow(10, r);
}

// const tests = [15, 1234, 1445, 14, 10, 7001, 99];

// console.log(rounders(tests[2]));
