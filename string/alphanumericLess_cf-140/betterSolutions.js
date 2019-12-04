alphanumericLess = (s1, s2) => {
  // fill numeric values to 20 chars with leading zeros
  x1 = s1.replace(/\d+/g, a => a.padStart(20, 0));
  x2 = s2.replace(/\d+/g, a => a.padStart(20, 0));
  console.log(x1, x2);
  // check which is larger
  if (x1 < x2) return true;
  if (x1 > x2) return false;
  // if they are equal, fill strings with Z's and check again.
  return s1.padEnd(20, "Z") < s2.padEnd(20, "Z");
};

const q1 = ["a", "a1"]; // true
const q2 = ["ab", "a1"]; // false
const q3 = ["b", "a1"]; // false
const q4 = ["x11y012", "x011y13"]; // true
const q5 = ["ab123", "ab34z"]; // false
const q6 = ["0000", "000"]; // true
const q7 = ["10", "01"]; // false
const q8 = ["ab000144", "ab144"]; // true
const q9 = ["ab", "a"]; // false
const q10 = ["000", "0000"]; // false
const q11 = ["abc123", "abc123"]; // false
const q12 = ["zza1233", "zza1234"]; // true
const q13 = ["zzz1", "zzz1"]; // false
const q14 = ["00", "a2"]; // true
const q95 = ["12345678909876543210", "12345678909876543211"]; // true
const q96 = ["x817skjd8309218xn", "x817sljd8309217xn"]; // true
const q97 = ["12345678909876543219", "12345678909876543210"]; // false
const q98 = ["0012a012b0000013", "0012a0012b00013"]; // false
const q99 = ["lckj0982871zdj12819", "lckj00982871skdj12820"]; // false

// console.log("q1:", alphanumericLess(...q1));
// console.log("q2:", alphanumericLess(...q2));
// console.log("q3:", alphanumericLess(...q3));
// console.log("q4:", alphanumericLess(...q4));
// console.log("q5:", alphanumericLess(...q5));
// console.log("q6:", alphanumericLess(...q6));
// console.log("q7:", alphanumericLess(...q7));
// console.log("q8:", alphanumericLess(...q8));
// console.log("q9:", alphanumericLess(...q9));
// console.log("q10:", alphanumericLess(...q10));
// console.log("q11:", alphanumericLess(...q11));
// console.log("q12:", alphanumericLess(...q12));
// console.log("q13:", alphanumericLess(...q13));
// console.log("q14:", alphanumericLess(...q14));
// console.log("q95:", alphanumericLess(...q95));
// console.log("q96:", alphanumericLess(...q96));
// console.log("q97:", alphanumericLess(...q97));
// console.log("q98:", alphanumericLess(...q98));
console.log("q99:", alphanumericLess(...q99));
// console.log("qq:", alphanumericLess("bc004b02", "bc4b0002"));
