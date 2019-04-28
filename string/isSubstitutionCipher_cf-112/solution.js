/*

A ciphertext alphabet is obtained from the plaintext alphabet by means of rearranging some characters. For example "bacdef...xyz" will be a simple ciphertext alphabet where a and b are rearranged.

A substitution cipher is a method of encoding where each letter of the plaintext alphabet is replaced with the corresponding (i.e. having the same index) letter of some ciphertext alphabet.

Given two strings, check whether it is possible to obtain them from each other using some (possibly, different) substitution ciphers.

Example

For string1 = "aacb" and string2 = "aabc", the output should be
isSubstitutionCipher(string1, string2) = true.

Any ciphertext alphabet that starts with acb... would make this transformation possible.

For string1 = "aa" and string2 = "bc", the output should be
isSubstitutionCipher(string1, string2) = false.

Input/Output

[execution time limit] 4 seconds (js)

[input] string string1

A string consisting of lowercase English characters.

Guaranteed constraints:
1 ≤ string1.length ≤ 10.

[input] string string2

A string consisting of lowercase English characters of the same length as string1.

Guaranteed constraints:
string2.length = string1.length.

[output] boolean

*/

function isSubstitutionCipher(string1, string2) {
  const cipher1 = {};
  const cipher2 = {};

  for (let i = 0, len = string1.length; i < len; i++) {
    if (!cipher1[string1[i]]) {
      if (!cipher2[string2[i]]) {
        cipher1[string1[i]] = string2[i];
        cipher2[string2[i]] = string1[i];
      } else {
        return false;
      }
    } else {
      if (cipher1[string1[i]] !== string2[i]) {
        return false;
      }
    }
  }

  return cipher1;
}

const q1 = ["aacb", "aabc"]; // true
const q2 = ["aa", "bc"]; // false
const q3 = ["aaxxaaz", "aazzaay"]; // true
const q4 = ["aaxyaa", "aazzaa"]; // false
const q5 = ["aabc", "aacb"]; // true
const q6 = ["dccd", "zzxx"]; // false
const q7 = ["ddcc", "zzxx"]; // true
const q8 = ["aaaabbbbcc", "cccccccccc"]; // false
const q9 = ["abcdefg", "hijklmn"]; // true
const q10 = ["aaabbbccc", "aaabbbccc"]; // true
const q11 = ["abcb", "abca"]; // false

console.log(isSubstitutionCipher(q1[0], q1[1]));
console.log(isSubstitutionCipher(q2[0], q2[1]));
console.log(isSubstitutionCipher(q3[0], q3[1]));
console.log(isSubstitutionCipher(q4[0], q4[1]));
console.log(isSubstitutionCipher(q5[0], q5[1]));
console.log(isSubstitutionCipher(q6[0], q6[1]));
console.log(isSubstitutionCipher(q7[0], q7[1]));
console.log(isSubstitutionCipher(q8[0], q8[1]));
console.log(isSubstitutionCipher(q9[0], q9[1]));
console.log(isSubstitutionCipher(q10[0], q10[1]));
console.log(isSubstitutionCipher(q11[0], q11[1]));
