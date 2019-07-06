/*
A string is said to be a correct sentence if it starts with the capital letter and ends with a full stop (.).

Given a string, check whether it represents a correct sentence.

Example

For inputString = "This is a correct sentence.", the output should be
isCorrectSentence(inputString) = true;
For inputString = "this is an incorrect sentence.", the output should be
isCorrectSentence(inputString) = false;
For inputString = "This is another incorrect sentence", the output should be
isCorrectSentence(inputString) = false.
Input/Output

[execution time limit] 4 seconds (js)

[input] string inputString

A non-empty string.

Guaranteed constraints:
1 ≤ inputString.length ≤ 50.

[output] boolean

*/

function isCorrectSentence(inputString) {
  return inputString.endsWith(".") && /[A-Z]/.test(inputString.slice(0, 1));
}

const q1 = "This is a correct sentence."; // true
const q2 = "this is an incorrect sentence."; // false
const q3 = "This is another incorrect sentence"; // false
const q4 = "this."; // false
const q5 = "This"; // false
const q6 = "This."; // true
const q7 = "End ."; // true
const q8 = "True"; // false
const q9 = "true"; // false
const q10 = "Correct sentence."; // true

console.log(isCorrectSentence(q1));
console.log(isCorrectSentence(q2));
console.log(isCorrectSentence(q3));
console.log(isCorrectSentence(q4));
console.log(isCorrectSentence(q5));
console.log(isCorrectSentence(q6));
console.log(isCorrectSentence(q7));
console.log(isCorrectSentence(q8));
console.log(isCorrectSentence(q9));
console.log(isCorrectSentence(q10));
