/*

Proper nouns always begin with a capital letter, followed by small letters.

Correct a given proper noun so that it fits this statement.

Example

For noun = "pARiS", the output should be
properNounCorrection(noun) = "Paris";
For noun = "John", the output should be
properNounCorrection(noun) = "John".


Input/Output

[execution time limit] 4 seconds (js)

[input] string noun

A string representing a proper noun with a mix of capital and small English letters.

Guaranteed constraints:
1 ≤ noun.length ≤ 10.

[output] string

Corrected (if needed) noun.

*/

function properNounCorrection(noun) {
  return `${noun.slice(0, 1).toUpperCase()}${noun.slice(1).toLowerCase()}`;
}

const e1 = "pARiS"; // Paris
const e2 = "John"; // John
const e3 = "mary"; // Mary
const e4 = "a"; // A
const e5 = "B"; // B
const e6 = "yFZMlGvUQP"; // Yfzmlgvuqp
const e7 = "HQQrrDxuqe"; // Hqqrrdxuqe
const e8 = "atDh"; // Atdh
const e9 = "pJHSYVAZB"; // Pjhsyvazb
const e10 = "dKrqO"; // Dkrqo

console.log(properNounCorrection(e6));
