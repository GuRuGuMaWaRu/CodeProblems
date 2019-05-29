/*
Consider two following representations of a non-negative integer:

A simple decimal integer, constructed of a non-empty sequence of digits from 0 to 9;
An integer with at least one digit in a base from 2 to 16 (inclusive), enclosed between # characters, and preceded by the base, which can only be a number between 2 and 16 in the first representation. For digits from 10 to 15 characters a, b, ..., f and A, B, ..., F are used.
Additionally, both representations may contain underscore (_) characters; they are used only as separators for improving legibility of numbers and can be ignored while processing a number.

Your task is to determine whether the given string is a valid integer representation.

Note: this is how integer numbers are represented in the programming language Ada.

Example

For line = "123_456_789", the output should be
adaNumber(line) = true;
For line = "16#123abc#", the output should be
adaNumber(line) = true;
For line = "10#123abc#", the output should be
adaNumber(line) = false;
For line = "10#10#123ABC#", the output should be
adaNumber(line) = false;
For line = "10#0#", the output should be
adaNumber(line) = true;
For line = "10##", the output should be
adaNumber(line) = false.
Input/Output

[execution time limit] 4 seconds (js)

[input] string line

A non-empty string.

Guaranteed constraints:
2 ≤ line.length ≤ 30.

[output] boolean

true if line is a valid integer representation, false otherwise.

*/

function adaNumber(line) {
  const withoutUnderscores = line.split("_");

  for (let item of withoutUnderscores) {
    if (item.includes("#")) {
      return `${line}: hexadecimal`;
    }

    if (!Number.isInteger(+item)) {
      return `${line}: not a number`;
    }
  }

  return `${line}: number`;
}

const q1 = "123_456_789"; // true
const q1_1 = "123t_456a_789t"; // true
const q2 = "16#123abc#"; // true
const q3 = "10#123abc#"; // false
const q4 = "10#10#123ABC#"; // false
const q5 = "10#0#"; // true
const q6 = "10##"; // false
const q7 = "16#1234567890ABCDEFabcdef#"; // true
const q8 = "1600#"; // false
const q9 = "7#???#"; // false
const q10 = "4#4#"; // false
const q11 = "3454235ab534"; // false
const q12 = "1#0#"; // false
const q13 = "17#ac#"; // false
const q14 = "2#10110#"; // true
const q15 = "2#10110"; // false
const q16 = "#2#10110"; // false
const q17 = "#2#10110#"; // false
const q18 = "9##"; // false

console.log(adaNumber(q1));
console.log(adaNumber(q1_1));
console.log(adaNumber(q2));
console.log(adaNumber(q3));
console.log(adaNumber(q4));
console.log(adaNumber(q5));
console.log(adaNumber(q6));
console.log(adaNumber(q7));
console.log(adaNumber(q8));
console.log(adaNumber(q9));
console.log(adaNumber(q10));
