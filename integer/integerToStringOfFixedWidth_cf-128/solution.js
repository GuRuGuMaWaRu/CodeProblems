/*

Given a positive integer number and a certain length, we need to modify the given number to have a specified length. We are allowed to do that either by cutting out leading digits (if the number needs to be shortened) or by adding 0s in front of the original number.

Example

For number = 1234 and width = 2, the output should be
integerToStringOfFixedWidth(number, width) = "34";
For number = 1234 and width = 4, the output should be
integerToStringOfFixedWidth(number, width) = "1234";
For number = 1234 and width = 5, the output should be
integerToStringOfFixedWidth(number, width) = "01234".
Input/Output

[execution time limit] 4 seconds (js)

[input] integer number

A non-negative integer.

Guaranteed constraints:
0 ≤ number ≤ 109.

[input] integer width

A positive integer representing the desired length.

Guaranteed constraints:
1 ≤ width ≤ 50.

[output] string

The modified version of number as described above.

*/

// function integerToStringOfFixedWidth(number, width) {
//   const numToStr = String(number);
//   const lengthDifference = Math.abs(numToStr.length - width);

//   return numToStr.length >= width
//     ? numToStr.slice(lengthDifference)
//     : `${"0".repeat(width - numToStr.length)}${number}`;
// }

function integerToStringOfFixedWidth(number, width) {
  return String(number).slice(-width);
}

const q1 = [1234, 2]; // 34
const q2 = [1234, 4]; // 1234
const q3 = [1234, 5]; // 01234
const q4 = [0, 1]; // 0
const q5 = [89, 4]; // 0089
const q6 = [23456, 4]; // 3456
const q7 = [899, 3]; // 899

console.log(integerToStringOfFixedWidth(...q1));
console.log(integerToStringOfFixedWidth(...q2));
console.log(integerToStringOfFixedWidth(...q3));
console.log(integerToStringOfFixedWidth(...q4));
console.log(integerToStringOfFixedWidth(...q5));
console.log(integerToStringOfFixedWidth(...q6));
console.log(integerToStringOfFixedWidth(...q7));
