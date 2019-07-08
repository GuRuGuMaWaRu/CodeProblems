/*
Consider integer numbers from 0 to n - 1 written down along the circle in such a way that the distance between any two neighboring numbers is equal (note that 0 and n - 1 are neighboring, too).

Given n and firstNumber, find the number which is written in the radially opposite position to firstNumber.

Example

For n = 10 and firstNumber = 2, the output should be
circleOfNumbers(n, firstNumber) = 7.

Input/Output

[execution time limit] 4 seconds (js)

[input] integer n

A positive even integer.

Guaranteed constraints:
4 ≤ n ≤ 20.

[input] integer firstNumber

Guaranteed constraints:
0 ≤ firstNumber ≤ n - 1.

[output] integer

*/

function circleOfNumbers(n, firstNumber) {
  const diff = firstNumber + n / 2;

  return diff >= n ? diff - n : diff;
}

const q1 = [10, 2]; // 7
const q2 = [10, 7]; // 2
const q3 = [4, 1]; // 3
const q4 = [6, 3]; // 0
const q5 = [18, 6]; // 15
const q6 = [12, 10]; // 4
const q7 = [18, 5]; // 14

console.log(circleOfNumbers(...q1));
console.log(circleOfNumbers(...q2));
console.log(circleOfNumbers(...q3));
console.log(circleOfNumbers(...q4));
console.log(circleOfNumbers(...q5));
console.log(circleOfNumbers(...q6));
console.log(circleOfNumbers(...q7));
