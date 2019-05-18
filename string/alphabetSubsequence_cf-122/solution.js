/*

Check whether the given string is a subsequence of the plaintext alphabet.

Example

For s = "effg", the output should be
alphabetSubsequence(s) = false;
For s = "cdce", the output should be
alphabetSubsequence(s) = false;
For s = "ace", the output should be
alphabetSubsequence(s) = true;
For s = "bxz", the output should be
alphabetSubsequence(s) = true.
Input/Output

[execution time limit] 4 seconds (js)

[input] string s

Guaranteed constraints:
2 ≤ s.length ≤ 15.

[output] boolean

true if the given string is a subsequence of the alphabet, false otherwise.

*/

function alphabetSubsequence(s) {
  let previousCharCode = 0;

  for (let i = 0, len = s.length; i < len; i++) {
    if (s.charCodeAt(i) <= previousCharCode) {
      return false;
    }

    previousCharCode = s.charCodeAt(i);
  }

  return true;
}

const q1 = "effg"; // false
const q2 = "cdce"; // false
const q3 = "ace"; // true
const q4 = "bxz"; // true
const q5 = "cdefghijkxyzz"; // false
const q6 = "qa"; // false
const q7 = "fkyz"; // true
const q8 = "xz"; // true
const q9 = "pfyz"; // false
const q10 = "fz"; // true

console.log(alphabetSubsequence(q1));
console.log(alphabetSubsequence(q2));
console.log(alphabetSubsequence(q3));
console.log(alphabetSubsequence(q4));
console.log(alphabetSubsequence(q5));
console.log(alphabetSubsequence(q6));
console.log(alphabetSubsequence(q7));
console.log(alphabetSubsequence(q8));
console.log(alphabetSubsequence(q9));
console.log(alphabetSubsequence(q10));
