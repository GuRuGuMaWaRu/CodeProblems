/*
Your Informatics teacher at school likes coming up with new ways to help you understand the material. When you started studying numeral systems, he introduced his own numeral system, which he's convinced will help clarify things. His numeral system has base 26, and its digits are represented by English capital letters - A for 0, B for 1, and so on.

The teacher assigned you the following numeral system exercise: given a one-digit number, you should find all unordered pairs of one-digit numbers whose values add up to the number.

Example

For number = 'G', the output should be
newNumeralSystem(number) = ["A + G", "B + F", "C + E", "D + D"].

Translating this into the decimal numeral system we get: number = 6, so it is ["0 + 6", "1 + 5", "2 + 4", "3 + 3"].

Input/Output

[execution time limit] 4 seconds (js)

[input] char number

A character representing a correct one-digit number in the new numeral system.

Guaranteed constraints:
'A' ≤ number ≤ 'Z'.

[output] array.string

An array of strings in the format "letter1 + letter2", where "letter1" and "letter2" are correct one-digit numbers in the new numeral system. The strings should be sorted by "letter1".
Note that "letter1 + letter2" and "letter2 + letter1" are equal pairs and we don't consider them to be different.

*/

function newNumeralSystem(number) {
  const realNumber = number.charCodeAt(number) - 65;
  const answers = [];
  let limit = realNumber;

  for (let i = 0; i <= limit; i++) {
    for (let j = i; j <= limit; j++) {
      if (i > j) {
        break;
      }
      if (i + j === realNumber) {
        answers.push(
          `${String.fromCharCode(i + 65)} + ${String.fromCharCode(j + 65)}`
        );
        limit = j;
      }
    }
  }

  return answers;
}

const q1 = "G"; // ["A + G", "B + F", "C + E", "D + D"]
const q2 = "A"; // ["A + A"]
const q3 = "D"; // ["A + D", "B + C"]
const q4 = "E"; // ["A + E", "B + D", "C + C"]
const q5 = "F"; // ["A + F", "B + E", "C + D"]
const q6 = "I"; // ["A + I", "B + H", "C + G", "D + F", "E + E"]
const q7 = "K"; // ["A + K", "B + J", "C + I", "D + H", "E + G", "F + F"]
const q8 = "L"; // ["A + L", "B + K", "C + J", "D + I", "E + H", "F + G"]
const q9 = "O"; // ["A + O", "B + N", "C + M", "D + L", "E + K", "F + J", "G + I", "H + H"]
const q10 = "P"; // ["A + P", "B + O", "C + N", "D + M", "E + L", "F + K", "G + J","H + I"]
const q11 = "S"; // ["A + S", "B + R", "C + Q", "D + P", "E + O", "F + N", "G + M", "H + L", "I + K", "J + J"]
const q12 = "T"; // ["A + T", "B + S", "C + R", "D + Q", "E + P", "F + O", "G + N", "H + M", "I + L", "J + K"]
const q13 = "W"; // ["A + W", "B + V", "C + U", "D + T", "E + S", "F + R", "G + Q", "H + P", "I + O", "J + N", "K + M", "L + L"]

console.log(newNumeralSystem(q1));
console.log(newNumeralSystem(q2));
console.log(newNumeralSystem(q3));
console.log(newNumeralSystem(q4));
console.log(newNumeralSystem(q5));
console.log(newNumeralSystem(q6));
console.log(newNumeralSystem(q7));
console.log(newNumeralSystem(q8));
console.log(newNumeralSystem(q9));
console.log(newNumeralSystem(q10));
console.log(newNumeralSystem(q11));
console.log(newNumeralSystem(q12));
console.log(newNumeralSystem(q13));
