/*

There are some people and cats in a house. You are given the number of legs they have all together. Your task is to return an array containing every possible number of people that could be in the house sorted in ascending order. It's guaranteed that each person has 2 legs and each cat has 4 legs.

Example

For legs = 6, the output should be
houseOfCats(legs) = [1, 3].

There could be either 1 cat and 1 person (4 + 2 = 6) or 3 people (2 * 3 = 6).

For legs = 2, the output should be
houseOfCats(legs) = [1].

There can be only 1 person.

Input/Output

[execution time limit] 4 seconds (js)

[input] integer legs

The total number of legs in the house. It's guaranteed,that this number is even.

Guaranteed constraints:
0 ≤ legs < 50.

[output] array.integer

Every possible number of people that can be in the house.

*/

function houseOfCats(legs) {}

const q1 = 6; // [1, 3]
const q2 = 2; // [1]
const q3 = 8; // [0, 2, 4]
const q4 = 4; // [0, 2]
const q5 = 44; // [0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22]

console.log(houseOfCats(q1));
console.log(houseOfCats(q2));
console.log(houseOfCats(q3));
console.log(houseOfCats(q4));
console.log(houseOfCats(q5));
