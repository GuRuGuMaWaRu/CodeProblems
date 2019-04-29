/*

You are given two strings s and t of the same length, consisting of uppercase English letters. Your task is to find the minimum number of "replacement operations" needed to get some anagram of the string t from the string s. A replacement operation is performed by picking exactly one character from the string s and replacing it by some other character.

Example

For s = "AABAA" and t = "BBAAA", the output should be
createAnagram(s, t) = 1;
For s = "OVGHK" and t = "RPGUC", the output should be
createAnagram(s, t) = 4.
Input/Output

[execution time limit] 4 seconds (js)

[input] string s

Guaranteed constraints:
5 ≤ s.length ≤ 35.

[input] string t

Guaranteed constraints:
t.length = s.length.

[output] integer

The minimum number of replacement operations needed to get an anagram of the string t from the string s.

*/

function createAnagram(s, t) {
  [...s].forEach(char => {
    if (t.includes(char)) {
      t = t.replace(char, "");
    }
  });

  return t.length;
}

const q1 = ["AABAA", "BBAAA"]; // 1
const q2 = ["OVGHK", "RPGUC"]; // 4
const q3 = [
  "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB",
  "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAC"
]; // 1
const q4 = ["HDFFVR", "FEDDEE"]; // 4
const q5 = ["AABCDS", "BASEAE"]; // 2
const q6 = [
  "ZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZY",
  "YYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYZ"
]; // 31
const q7 = [
  "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA",
  "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA"
]; // 0
const q8 = ["AAAAAA", "AAAAAA"]; // 0
const q9 = ["KJDMDLEEKALIJB", "AFDJGDCGHMIGHB"]; // 7
const q10 = ["BBAAABCBCAABB", "BBBCCCBABBACA"]; // 2

console.log(createAnagram(q1[0], q1[1]));
console.log(createAnagram(q2[0], q2[1]));
console.log(createAnagram(q3[0], q3[1]));
console.log(createAnagram(q4[0], q4[1]));
console.log(createAnagram(q5[0], q5[1]));
console.log(createAnagram(q6[0], q6[1]));
console.log(createAnagram(q7[0], q7[1]));
console.log(createAnagram(q8[0], q8[1]));
console.log(createAnagram(q9[0], q9[1]));
console.log(createAnagram(q10[0], q10[1]));
