/*

Given an array of strings, return another array containing all of its longest strings.

Example

For inputArray = ["aba", "aa", "ad", "vcd", "aba"], the output should be
allLongestStrings(inputArray) = ["aba", "vcd", "aba"].

Input/Output

[execution time limit] 4 seconds (js)

[input] array.string inputArray

A non-empty array.

Guaranteed constraints:
1 ≤ inputArray.length ≤ 10,
1 ≤ inputArray[i].length ≤ 10.

[output] array.string

Array of the longest strings, stored in the same order as in the inputArray.

*/

function allLongestStrings(inputArray) {}

const q1 = ["aba", "aa", "ad", "vcd", "aba"]; // ["aba", "vcd", "aba"]
const q2 = ["aa"]; // ["aa"]
const q3 = ["abc", "eeee", "abcd", "dcd"]; // ["eeee", "abcd"]
const q4 = ["a", "abc", "cbd", "zzzzzz", "a", "abcdef", "asasa", "aaaaaa"]; // ["zzzzzz", "abcdef", "aaaaaa"]
const q5 = ["enyky", "benyky", "yely", "varennyky"]; // ["varennyky"]
const q6 = ["abacaba", "abacab", "abac", "xxxxxx"]; // ["abacaba"]
const q7 = [
  "young",
  "yooooooung",
  "hot",
  "or",
  "not",
  "come",
  "on",
  "fire",
  "water",
  "watermelon"
]; // ["yooooooung", "watermelon"]
const q8 = ["onsfnib", "aokbcwthc", "jrfcw"]; // ["aokbcwthc"]
const q9 = ["lbgwyqkry"]; // ["lbgwyqkry"]
const q10 = ["i"]; // ["i"]

console.log(allLongestStrings(q1));
console.log(allLongestStrings(q2));
console.log(allLongestStrings(q3));
console.log(allLongestStrings(q4));
console.log(allLongestStrings(q5));
console.log(allLongestStrings(q6));
console.log(allLongestStrings(q7));
console.log(allLongestStrings(q8));
console.log(allLongestStrings(q9));
console.log(allLongestStrings(q10));
