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

function isMAC48Address(inputString) {
  return inputString
    .split("-")
    .every(fragment => /^[0-9A-F]{2}$/.test(fragment));
}

const q1 = "00-1B-63-84-45-E6"; // true
const q2 = "Z1-1B-63-84-45-E6"; // false
const q3 = "not a MAC-48 address"; // false
const q4 = "FF-FF-FF-FF-FF-FF"; // true
const q5 = "00-00-00-00-00-00"; // true
const q6 = "G0-00-00-00-00-00"; // false
const q7 = "02-03-04-05-06-07-"; // false
const q8 = "12-34-56-78-9A-BC"; // true
const q9 = "FF-FF-AB-CD-EA-BC"; // true
const q10 = "12-34-56-78-9A-BG"; // false

console.log(isMAC48Address(q1));
console.log(isMAC48Address(q2));
console.log(isMAC48Address(q3));
console.log(isMAC48Address(q4));
console.log(isMAC48Address(q5));
console.log(isMAC48Address(q6));
console.log(isMAC48Address(q7));
console.log(isMAC48Address(q8));
console.log(isMAC48Address(q9));
console.log(isMAC48Address(q10));
