/*
An alphanumeric ordering of strings is defined as follows: each string is considered as a sequence of tokens, where each token is a letter or a number (as opposed to an isolated digit, as is the case in lexicographic ordering). For example, the tokens of the string "ab01c004" are [a, b, 01, c, 004]. In order to compare two strings, we'll first break them down into tokens and then compare the corresponding pairs of tokens with each other (i.e. compare the first token of the first string with the first token of the second string, etc).

Here is how tokens are compared:

If a letter is compared with another letter, the usual alphabetical order applies.
A number is always considered less than a letter.
When two numbers are compared, their values are compared. Leading zeros, if any, are ignored.
If at some point one string has no more tokens left while the other one still does, the one with fewer tokens is considered smaller.

If the two strings s1 and s2 appear to be equal, consider the smallest index i such that tokens(s1)[i] and tokens(s2)[i] (where tokens(s)[i] is the ith token of string s) differ only by the number of leading zeros. If no such i exists, the strings are indeed equal. Otherwise, the string whose ith token has more leading zeros is considered smaller.

Here are some examples of comparing strings using alphanumeric ordering.

"a" < "a1" < "ab"
"ab42" < "ab000144" < "ab00144" < "ab144" < "ab000144x"
"x11y012" < "x011y13"
Your task is to return true if s1 is strictly less than s2, and false otherwise.

Example

For s1 = "a" and s2 = "a1", the output should be alphanumericLess(s1, s2) = true;

These strings have equal first tokens, but since s1 has fewer tokens than s2, it's considered smaller.

For s1 = "ab" and s2 = "a1", the output should be alphanumericLess(s1, s2) = false;

These strings also have equal first tokens, but since numbers are considered less than letters, s1 is larger.

For s1 = "b" and s2 = "a1", the output should be alphanumericLess(s1, s2) = false.

Since b is greater than a, s1 is larger.

Input/Output

[execution time limit] 4 seconds (js)

[input] string s1

A string consisting of English letters and digits.

Guaranteed constraints:
1 ≤ s1.length ≤ 20.

[input] string s2

A string consisting of English letters and digits.

Guaranteed constraints:
1 ≤ s2.length ≤ 20.

[output] boolean

true if s1 is alphanumerically strictly less than s2, false otherwise.
*/

function alphanumericLess(s1, s2) {}

const q1 = ["a", "a1"]; // true
const q2 = ["ab", "a1"]; // false
const q3 = ["b", "a1"]; // false
const q4 = ["x11y012", "x011y13"]; // true
const q5 = ["ab123", "ab34z"]; // false
const q6 = ["0000", "000"]; // true
const q7 = ["10", "01"]; // false
const q8 = ["ab000144", "ab144"]; // true
const q9 = ["ab", "a"]; // false
const q10 = ["000", "0000"]; // false
const q11 = ["abc123", "abc123"]; // false
const q12 = ["zza1233", "zza1234"]; // true
const q13 = ["zzz1", "zzz1"]; // false
const q14 = ["00", "a2"]; // true

console.log(alphanumericLess(...q1));
console.log(alphanumericLess(...q2));
console.log(alphanumericLess(...q3));
console.log(alphanumericLess(...q4));
console.log(alphanumericLess(...q5));
console.log(alphanumericLess(...q6));
console.log(alphanumericLess(...q7));
console.log(alphanumericLess(...q8));
console.log(alphanumericLess(...q9));
console.log(alphanumericLess(...q10));
console.log(alphanumericLess(...q11));
console.log(alphanumericLess(...q12));
console.log(alphanumericLess(...q13));
console.log(alphanumericLess(...q14));
