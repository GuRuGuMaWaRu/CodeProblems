/*

Given a rectangular matrix of characters, add a border of asterisks(*) to it.

Example

For

picture = ["abc", "ded"]
the output should be

addBorder(picture) = ["*****",
                      "*abc*",
                      "*ded*",
                      "*****"]
Input/Output

[execution time limit] 4 seconds (js)

[input] array.string picture

A non-empty array of non-empty equal-length strings.

Guaranteed constraints:
1 ≤ picture.length ≤ 100,
1 ≤ picture[i].length ≤ 100.

[output] array.string

The same matrix of characters, framed with a border of asterisks of width 1.

*/

function addBorder(picture) {
  const asteriskLine = `*${"*".repeat(picture[0].length)}*`;
  return [asteriskLine, ...picture.map(line => `*${line}*`), asteriskLine];
}

const q1 = ["abc", "ded"]; // ["*****", "*abc*", "*ded*", "*****"]
const q2 = ["a"]; // ["***", "*a*", "***"]
const q3 = ["aa", "**", "zz"]; // ["****", "*aa*", "****", "*zz*", "****"]
const q4 = ["abcde", "fghij", "klmno", "pqrst", "uvwxy"]; // ["*******", "*abcde*", "*fghij*", "*klmno*", "*pqrst*", "*uvwxy*", "*******"]
const q5 = ["wzy**"]; // ["*******", "*wzy***", "*******"]

console.log(addBorder(q1));
console.log(addBorder(q2));
console.log(addBorder(q3));
console.log(addBorder(q4));
console.log(addBorder(q5));
