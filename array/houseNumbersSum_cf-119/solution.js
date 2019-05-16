/*

A boy is walking a long way from school to his home. To make the walk more fun he decides to add up all the numbers of the houses that he passes by during his walk. Unfortunately, not all of the houses have numbers written on them, and on top of that the boy is regularly taking turns to change streets, so the numbers don't appear to him in any particular order.

At some point during the walk the boy encounters a house with number 0 written on it, which surprises him so much that he stops adding numbers to his total right after seeing that house.

For the given sequence of houses determine the sum that the boy will get. It is guaranteed that there will always be at least one 0 house on the path.

Example

For inputArray = [5, 1, 2, 3, 0, 1, 5, 0, 2], the output should be
houseNumbersSum(inputArray) = 11.

The answer was obtained as 5 + 1 + 2 + 3 = 11.

Input/Output

[execution time limit] 4 seconds (js)

[input] array.integer inputArray

Guaranteed constraints:
5 ≤ inputArray.length ≤ 10,
0 ≤ inputArray[i] ≤ 10.

[output] integer

*/

function houseNumbersSum(inputArray) {}

const q1 = [5, 1, 2, 3, 0, 1, 5, 0, 2]; // 11
const q2 = [4, 2, 1, 6, 0]; // 13
const q3 = [4, 1, 2, 3, 0, 10, 2]; // 10
const q4 = [0, 1, 2, 3, 0]; // 0
const q5 = [5, 1, 1, 3, 0, 1, 5, 0, 2]; // 10
const q6 = [10, 10, 10, 10, 10, 10, 10, 10, 10, 0]; // 90
const q7 = [10, 10, 10, 10, 10, 10, 10, 10, 0, 10]; // 80
const q8 = [[7, 1, 3, 4, 4], 5]; // 3

console.log(houseNumbersSum(...q1));
console.log(houseNumbersSum(...q2));
console.log(houseNumbersSum(...q3));
console.log(houseNumbersSum(...q4));
console.log(houseNumbersSum(...q5));
console.log(houseNumbersSum(...q6));
console.log(houseNumbersSum(...q7));
console.log(houseNumbersSum(...q8));
