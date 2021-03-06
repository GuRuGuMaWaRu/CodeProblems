/*

A step(x) operation works like this: it changes a number x into x - s(x), where s(x) is the sum of x's digits. You like applying functions to numbers, so given the number n, you decide to build a decreasing sequence of numbers: n, step(n), step(step(n)), etc., with 0 as the last element.

Building a single sequence isn't enough for you, so you replace all elements of the sequence with the sums of their digits (s(x)). Now you're curious as to which number appears in the new sequence most often. If there are several answers, return the maximal one.

Example

For n = 88, the output should be
mostFrequentDigitSum(n) = 9.

Here is the first sequence you built: 88, 72, 63, 54, 45, 36, 27, 18, 9, 0;
And here is s(x) for each of its elements: 16, 9, 9, 9, 9, 9, 9, 9, 9, 0.
As you can see, the most frequent number in the second sequence is 9.

For n = 8, the output should be
mostFrequentDigitSum(n) = 8.

At first you built the following sequence: 8, 0
s(x) for each of its elements is: 8, 0
As you can see, the answer is 8 (it appears as often as 0, but is greater than it).

Input/Output

[execution time limit] 4 seconds (js)

[input] integer n

Guaranteed constraints:
1 ≤ n ≤ 105.

[output] integer

The most frequent number in the sequence s(n), s(step(n)), s(step(step(n))), etc.

*/

function mostFrequentDigitSum(n) {
  const numbers = {};
  let numOfOccurences = 0;
  let mostFrequentSum = 0;

  while (n > 0) {
    const sum = `${n}`.split("").reduce((total, num) => total + Number(num), 0);

    numbers[sum] = (numbers[sum] || 0) + 1;
    n = n - sum;
  }

  for (const key in numbers) {
    if (numbers[key] > numOfOccurences) {
      numOfOccurences = numbers[key];
      mostFrequentSum = key;
    } else if (numbers[key] === numOfOccurences) {
      mostFrequentSum = mostFrequentSum > key ? mostFrequentSum : key;
    }
  }

  return Number(mostFrequentSum);
}

const q1 = 88; // 9
const q2 = 8; // 8
const q3 = 1; // 1
const q4 = 17; // 9
const q5 = 239; // 9
const q6 = 994; // 9
const q7 = 99999; // 18

console.log(mostFrequentDigitSum(q1));
console.log(mostFrequentDigitSum(q2));
console.log(mostFrequentDigitSum(q3));
console.log(mostFrequentDigitSum(q4));
console.log(mostFrequentDigitSum(q5));
console.log(mostFrequentDigitSum(q6));
console.log(mostFrequentDigitSum(q7));
