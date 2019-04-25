/*

A media access control address (MAC address) is a unique identifier assigned to network interfaces for communications on the physical network segment.

The standard (IEEE 802) format for printing MAC-48 addresses in human-friendly form is six groups of two hexadecimal digits (0 to 9 or A to F), separated by hyphens (e.g. 01-23-45-67-89-AB).

Your task is to check by given string inputString whether it corresponds to MAC-48 address or not.

Example

For inputString = "00-1B-63-84-45-E6", the output should be
isMAC48Address(inputString) = true;
For inputString = "Z1-1B-63-84-45-E6", the output should be
isMAC48Address(inputString) = false;
For inputString = "not a MAC-48 address", the output should be
isMAC48Address(inputString) = false.
Input/Output

[execution time limit] 4 seconds (js)

[input] string inputString

Guaranteed constraints:
15 ≤ inputString.length ≤ 20.

[output] boolean

true if inputString corresponds to MAC-48 address naming rules, false otherwise.

*/

function stringsConstruction(a, b) {}

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
