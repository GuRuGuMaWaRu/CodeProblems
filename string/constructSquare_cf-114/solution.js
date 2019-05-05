/*

Given a string consisting of lowercase English letters, find the largest square number which can be obtained by reordering the string's characters and replacing them with any digits you need (leading zeros are not allowed) where same characters always map to the same digits and different characters always map to different digits.

If there is no solution, return -1.

Example

For s = "ab", the output should be
constructSquare(s) = 81.
The largest 2-digit square number with different digits is 81.
For s = "zzz", the output should be
constructSquare(s) = -1.
There are no 3-digit square numbers with identical digits.
For s = "aba", the output should be
constructSquare(s) = 900.
It can be obtained after reordering the initial string into "baa" and replacing "a" with 0 and "b" with 9.
Input/Output

[execution time limit] 4 seconds (js)

[input] string s

Guaranteed constraints:
1 ≤ s.length < 10.

[output] integer

*/

function constructSquare(s) {
  let number = 1;

  const largestNum = s.replace(/\D/gi, 9);
  number = Math.ceil(Math.sqrt(largestNum));

  // number representation of a string
  const convertedString = Object.values(
    s.split("").reduce((calculated, char) => {
      calculated[char]
        ? (calculated[char] = calculated[char] + 1)
        : (calculated[char] = 1);
      return calculated;
    }, {})
  )
    .sort()
    .join("");

  while (true) {
    const toThePower = number ** 2;
    number = number - 1;

    // number representation of a square
    const convertedNumber = Object.values(
      [...toThePower.toString()].reduce((calculated, number) => {
        calculated[number]
          ? (calculated[number] = calculated[number] + 1)
          : (calculated[number] = 1);
        return calculated;
      }, {})
    )
      .sort()
      .join("");

    if (convertedNumber === convertedString) {
      return toThePower;
    }
    if (String(toThePower).length < s.length) {
      return -1;
    }
  }
}

const q1 = "ab"; // 81
const q2 = "zzz"; // -1
const q3 = "aba"; // 900
const q4 = "abcbbb"; // 810000
const q5 = "abc"; // 961
const q6 = "aaaabbcde"; // 999950884
const q7 = "a"; // 81

console.log(constructSquare(q1));
console.log(constructSquare(q2));
console.log(constructSquare(q3));
console.log(constructSquare(q4));
console.log(constructSquare(q5));
console.log(constructSquare(q6));
console.log(constructSquare(q7));
