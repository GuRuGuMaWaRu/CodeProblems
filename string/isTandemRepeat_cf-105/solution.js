/*
Determine whether the given string can be obtained by one concatenation of some string to itself.

Example

For inputString = "tandemtandem", the output should be
isTandemRepeat(inputString) = true;
For inputString = "qqq", the output should be
isTandemRepeat(inputString) = false;
For inputString = "2w2ww", the output should be
isTandemRepeat(inputString) = false.


[execution time limit] 4 seconds (js)

[input] string inputString

Guaranteed constraints:
2 ≤ inputString.length ≤ 20.

[output] boolean

true if inputString represents a string concatenated to itself, false otherwise.
*/

function isTandemRepeat(inputString) {
  return (
    inputString.slice(0, inputString.length / 2) ===
    inputString.slice(inputString.length / 2)
  );
}

const q1 = "tandemtandem"; // true
const q2 = "qqq"; // false
const q3 = "2w2ww"; // false
const q4 = "hophey"; // false
const q5 = "CodeSignalCodeSignal"; // true
const q6 = "interestinterest"; // true
const q7 = "aa"; // true
const q8 = "ab"; // false
const q9 = "stringString"; // false
const q10 = "truetruetrue"; // false

console.log(isTandemRepeat(q1));
console.log(isTandemRepeat(q2));
console.log(isTandemRepeat(q3));
console.log(isTandemRepeat(q4));
console.log(isTandemRepeat(q5));
console.log(isTandemRepeat(q6));
console.log(isTandemRepeat(q7));
console.log(isTandemRepeat(q8));
console.log(isTandemRepeat(q9));
console.log(isTandemRepeat(q10));
