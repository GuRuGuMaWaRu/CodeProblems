/*

Let's call two integers A and B friends if each integer from the array divisors is either a divisor of both A and B or neither A nor B. If two integers are friends, they are said to be in the same clan. How many clans are the integers from 1 to k, inclusive, broken into?

Example

For divisors = [2, 3] and k = 6, the output should be
numberOfClans(divisors, k) = 4.

The numbers 1 and 5 are friends and form a clan, 2 and 4 are friends and form a clan, and 3 and 6 do not have friends and each is a clan by itself. So the numbers 1 through 6 are broken into 4 clans.

Input/Output

[execution time limit] 4 seconds (js)

[input] array.integer divisors

A non-empty array of positive integers.

Guaranteed constraints:
2 ≤ divisors.length < 10,
1 ≤ divisors[i] ≤ 10.

[input] integer k

A positive integer.

Guaranteed constraints:
5 ≤ k ≤ 10.

[output] integer

*/

function numberOfClans(divisors, k) {
  const updatedDivisors = new Set(divisors);
  const clans = new Set();

  for (let i = 1; i <= k; i++) {
    let name = "";

    updatedDivisors.forEach(divisor => {
      if (i % divisor === 0) {
        name += divisor;
      }
    });

    if (!clans.has(name)) {
      clans.add(name);
    }
  }

  return clans.size;
}

const q1 = [[2, 3], 6]; // 4
const q2 = [[2, 3, 4], 6]; // 5
const q3 = [[1, 3], 10]; // 2
const q4 = [[6, 2, 2, 8, 9, 2, 2, 2, 2], 10]; // 5
const q5 = [[2, 5], 9]; // 3
const q6 = [[1, 2, 3], 8]; // 4
const q7 = [[5, 6], 5]; // 2
const q8 = [[7, 1, 3, 4, 4], 5]; // 3

console.log(numberOfClans(...q1));
console.log(numberOfClans(...q2));
console.log(numberOfClans(...q3));
console.log(numberOfClans(...q4));
console.log(numberOfClans(...q5));
console.log(numberOfClans(...q6));
console.log(numberOfClans(...q7));
console.log(numberOfClans(...q8));
