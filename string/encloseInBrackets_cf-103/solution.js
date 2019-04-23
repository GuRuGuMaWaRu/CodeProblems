/*

Given a string, enclose it in round brackets.

Example

For inputString = "abacaba", the output should be
encloseInBrackets(inputString) = "(abacaba)".

*/

function encloseInBrackets(inputString) {
  return `(${inputString})`;
}

const e1 = "abacaba";

console.log(encloseInBrackets(e1));
