/*

Some file managers sort filenames taking into account case of the letters, others compare strings as if all of the letters are of the same case. That may lead to different ways of filename ordering.

Call two filenames an unstable pair if their ordering depends on the case.

To compare two filenames a and b, find the first position i at which a[i] ≠ b[i]. If a[i] < b[i], then a < b. Otherwise a > b. If such position doesn't exist, the shorter string goes first.

Given two filenames, check whether they form an unstable pair.

Example

For filename1 = "aa" and filename2 = "AAB", the output should be
isUnstablePair(filename1, filename2) = true.

Because "AAB" < "aa", but "AAB" > "AA".

For filename1 = "A" and filename2 = "z", the output should be
isUnstablePair(filename1, filename2) = false.

Both "A" < "z" and "a" < "z".

Input/Output

[execution time limit] 4 seconds (js)

[input] string filename1

A non-empty string of English letters and digits.

Guaranteed constraints:
1 ≤ filename1.length ≤ 10.

[input] string filename2

A non-empty string of English letters and digits. It's guaranteed that there is no ambiguity, i.e. even being considered in the same case strings are never equal.

Guaranteed constraints:
1 ≤ filename2.length ≤ 10.

[output] boolean

true if filename1 and filename2 form an unstable pair, false otherwise.


*/

function isUnstablePair(filename1, filename2) {
  const original = [filename1, filename2].sort((a, b) => {
    return a < b;
  });
  const lowercase = [filename1, filename2].sort((a, b) => {
    return a.toLowerCase() < b.toLowerCase();
  });

  if (original[0] !== lowercase[0]) {
    return true;
  }
  return false;
}

const q1 = ["aa", "AAB"]; // true
const q2 = ["A", "z"]; // false
const q3 = ["yyyyyy", "Azzzzzzzzz"]; // false
const q4 = ["mehOu", "mehau"]; // true
const q5 = ["aaZ", "AAzz"]; // true
const q6 = ["fdsAs", "dzdw"]; // false
const q7 = ["aaad", "aaAdd"]; // true
const q8 = ["zzzzzAa123", "zzzzza"]; // true
const q9 = ["123za", "123Z"]; // false
const q10 = ["qwerTyu123", "qwertyu"]; // true

console.log(isUnstablePair(q1[0], q1[1]));
console.log(isUnstablePair(q2[0], q2[1]));
console.log(isUnstablePair(q3[0], q3[1]));
console.log(isUnstablePair(q4[0], q4[1]));
console.log(isUnstablePair(q5[0], q5[1]));
console.log(isUnstablePair(q6[0], q6[1]));
console.log(isUnstablePair(q7[0], q7[1]));
console.log(isUnstablePair(q8[0], q8[1]));
console.log(isUnstablePair(q9[0], q9[1]));
console.log(isUnstablePair(q10[0], q10[1]));
