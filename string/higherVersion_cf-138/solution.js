/*
Given two version strings composed of several non-negative decimal fields separated by periods ("."), both strings contain equal number of numeric fields. Return true if the first version is higher than the second version and false otherwise.

The syntax follows the regular semver ordering rules:

1.0.5 < 1.1.0 < 1.1.5 < 1.1.10 < 1.2.0 < 1.2.2
< 1.2.10 < 1.10.2 < 2.0.0 < 10.0.0
There are no leading zeros in any of the numeric fields, i.e. you do not have to handle inputs like 100.020.003 (it would instead be given as 100.20.3).

Example

For ver1 = "1.2.2" and ver2 = "1.2.0", the output should be
higherVersion(ver1, ver2) = true;
For ver1 = "1.0.5" and ver2 = "1.1.0", the output should be
higherVersion(ver1, ver2) = false.
Input/Output

[execution time limit] 4 seconds (js)

[input] string ver1

Guaranteed constraints:
1 ≤ ver1.length ≤ 15.

[input] string ver2

Guaranteed constraints:
1 ≤ ver2.length ≤ 15.

[output] boolean
*/

function higherVersion(ver1, ver2) {}

const q1 = ["1.2.2", "1.2.0"]; // true
const q2 = ["1.0.5", "1.1.0"]; // false
const q3 = ["1.1.0", "1.1.5"]; // false
const q4 = ["10", "9"]; // true
const q5 = ["1.0.10", "1.1.5"]; // false
const q6 = ["5", "1"]; // true
const q7 = ["1.1.10", "1.2.0"]; // false
const q8 = ["1.2.2", "1.2.10"]; // false
const q9 = ["1.10.2", "1.2.10"]; // true
const q10 = ["0", "0"]; // false
const q11 = ["4.3.22.1", "4.3.22.1"]; // false

console.log(higherVersion(...q1));
console.log(higherVersion(...q2));
console.log(higherVersion(...q3));
console.log(higherVersion(...q4));
console.log(higherVersion(...q5));
console.log(higherVersion(...q6));
console.log(higherVersion(...q7));
console.log(higherVersion(...q8));
console.log(higherVersion(...q9));
console.log(higherVersion(...q10));
console.log(higherVersion(...q11));
