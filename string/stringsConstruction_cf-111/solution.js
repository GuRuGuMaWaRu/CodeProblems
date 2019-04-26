/*

How many strings equal to a can be constructed using letters from the string b? Each letter can be used only once and in one string only.

Example

For a = "abc" and b = "abccba", the output should be
stringsConstruction(a, b) = 2.

We can construct 2 strings a with letters from b.

Input/Output

[execution time limit] 4 seconds (js)

[input] string a

String to construct, a contains only lowercase English letters.

Guaranteed constraints:
3 ≤ a.length ≤ 10.

[input] string b

String containing needed letters, b contains only lowercase English letters.

Guaranteed constraints:
3 ≤ b.length ≤ 50.

[output] integer

*/

function stringsConstruction(a, b) {
  const calculatedA = a.split("").reduce((calc, letter) => {
    calc[letter] = calc[letter] ? calc[letter] + 1 : 1;
    return calc;
  }, {});
  const calculatedB = b.split("").reduce((calc, letter) => {
    calc[letter] = calc[letter] ? calc[letter] + 1 : 1;
    return calc;
  }, {});
  const counts = [];

  for (const char in calculatedA) {
    const times = Math.floor(calculatedB[char] / calculatedA[char]);
    counts.push(times || 0);
  }

  return counts.sort((a, b) => a > b)[0];
}

const q1 = ["abc", "abccba"]; // 2
const q2 = ["hnccv", "hncvohcjhdfnhonxddcocjncchnvohchnjohcvnhjdhihsn"]; // 3
const q3 = ["abc", "def"]; // 0
const q4 = ["zzz", "zzzzzzzzzzz"]; // 3
const q5 = ["abcabcabc", "aaaaaaaaaaabbbbbbbbbbcccccccccc"]; // 3
const q6 = ["abc", "xyz"]; // 0
const q7 = ["zbc", "ydlblksdjccdddb"]; // 0
const q8 = ["abdd", "adadapqrtsmnckgljj"]; // 0
const q9 = ["abcde", "edbcaacbdebcedaadbecadbceecabddbaecabecdcdabeabcde"]; // 10
const q10 = ["abcde", "edbcaaclpebcekbadbecadbcefcabddbaecaaaaacdakrabcde"]; // 7

console.log(stringsConstruction(q1[0], q1[1]));
console.log(stringsConstruction(q2[0], q2[1]));
console.log(stringsConstruction(q3[0], q3[1]));
console.log(stringsConstruction(q4[0], q4[1]));
console.log(stringsConstruction(q5[0], q5[1]));
console.log(stringsConstruction(q6[0], q6[1]));
console.log(stringsConstruction(q7[0], q7[1]));
console.log(stringsConstruction(q8[0], q8[1]));
console.log(stringsConstruction(q9[0], q9[1]));
console.log(stringsConstruction(q10[0], q10[1]));
