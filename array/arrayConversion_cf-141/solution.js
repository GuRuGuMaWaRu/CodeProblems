/*
Given an array of 2k integers (for some integer k), perform the following operations until the array contains only one element:

On the 1st, 3rd, 5th, etc. iterations (1-based) replace each pair of consecutive elements with their sum;
On the 2nd, 4th, 6th, etc. iterations replace each pair of consecutive elements with their product.
After the algorithm has finished, there will be a single element left in the array. Return that element.

Example

For inputArray = [1, 2, 3, 4, 5, 6, 7, 8], the output should be
arrayConversion(inputArray) = 186.

We have [1, 2, 3, 4, 5, 6, 7, 8] -> [3, 7, 11, 15] -> [21, 165] -> [186], so the answer is 186.

Input/Output

[execution time limit] 4 seconds (js)

[input] array.integer inputArray

Guaranteed constraints:
1 ≤ inputArray.length ≤ 27,
-100 ≤ inputArray[i] ≤ 100.

[output] integer
*/

function arrayConversion(inputArray) {
  return inputArray;
}

const q1 = [1, 2, 3, 4, 5, 6, 7, 8]; // 186
const q2 = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]; // 64
const q3 = [3, 3, 5, 5]; // 60
const q4 = [-1, 1, 2, 3, 5, 5, 3, 7]; // 100
const q5 = [99]; // 99
const q6 = [99, 1]; // 100
const q7 = [34, 60, -9, -67, -100, -27, 100, 21]; // -22511

console.log("q1:", arrayConversion(q1));
console.log("q2:", arrayConversion(q2));
console.log("q3:", arrayConversion(q3));
console.log("q4:", arrayConversion(q4));
console.log("q5:", arrayConversion(q5));
console.log("q6:", arrayConversion(q6));
console.log("q7:", arrayConversion(q7));
