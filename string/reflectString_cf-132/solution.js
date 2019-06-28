/*
Define an alphabet reflection as follows: a turns into z, b turns into y, c turns into x, ..., n turns into m, m turns into n, ..., z turns into a.

Define a string reflection as the result of applying the alphabet reflection to each of its characters.

Reflect the given string.

Example

For inputString = "name", the output should be
reflectString(inputString) = "mznv".

Input/Output

[execution time limit] 4 seconds (js)

[input] string inputString

A string of lowercase characters.

Guaranteed constraints:
3 ≤ inputString.length ≤ 1000.

[output] string

*/

function reflectString(a) {
  return isNaN(a) ? "not a digit" : +a % 2 === 0 ? "even" : "odd";
}

const q1 = "name"; // "mznv"
const q2 = "abyz"; // "zyba"
const q3 = "nnnnn"; // "mmmmm"
const q4 = "pqr"; // "kji"
const q5 = "codesignal"; // "xlwvhrtmzo"

console.log(reflectString(q1));
console.log(reflectString(q2));
console.log(reflectString(q3));
console.log(reflectString(q4));
console.log(reflectString(q5));
