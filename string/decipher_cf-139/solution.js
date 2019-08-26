/*
Consider the following ciphering algorithm:

For each character replace it with its code.
Concatenate all of the obtained numbers.
Given a ciphered string, return the initial one if it is known that it consists only of lowercase letters.

Note: here the character's code means its decimal ASCII code, the numerical representation of a character used by most modern programming languages.

Example

For cipher = "10197115121", the output should be
decipher(cipher) = "easy".

Explanation: charCode('e') = 101, charCode('a') = 97, charCode('s') = 115 and charCode('y') = 121.

Input/Output

[execution time limit] 4 seconds (js)

[input] string cipher

A non-empty string which is guaranteed to be a cipher for some other string of lowercase letters.

Guaranteed constraints:
2 ≤ cipher.length ≤ 100.

[output] string
*/

function decipher(cipher) {}

const q1 = "10197115121"; // "easy"
const q2 = "98"; // "b"
const q3 = "122"; // "z"
const q4 = "1229897"; // "zba"
const q5 =
  "97989910010110210310410510610710810911011111211311411511611711811912012112297"; // "abcdefghijklmnopqrstuvwxyza"
const q6 =
  "10297115106108102108971061151041029897107106115981001029710711510010298"; // "fasjlflajshfbakjsbdfaksdfb"
const q7 =
  "11211111911310110810910097107108115111112119113101106107971101021101061021041149710511411497"; // "powqelmdaklsopwqejkanfnjfhrairra"

console.log(decipher(q1));
console.log(decipher(q2));
console.log(decipher(q3));
console.log(decipher(q4));
console.log(decipher(q5));
console.log(decipher(q6));
console.log(decipher(q7));
