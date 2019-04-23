/*
Given a string, check if it can become a palindrome through a case change of some (possibly, none) letters.

Example

For inputString = "AaBaa", the output should be
isCaseInsensitivePalindrome(inputString) = true.

"aabaa" is a palindrome as well as "AABAA", "aaBaa", etc.

For inputString = "abac", the output should be
isCaseInsensitivePalindrome(inputString) = false.

All the strings which can be obtained via changing case of some group of letters, i.e. "abac", "Abac", "aBAc" and 13 more, are not palindromes.

Input/Output

[execution time limit] 4 seconds (js)

[input] string inputString

Non-empty string consisting of English letters.

Guaranteed constraints:
4 ≤ inputString.length ≤ 10.

[output] boolean
*/

function isCaseInsensitivePalindrome(inputString) {
  const lowerCaseString = inputString.toLowerCase();
  const firstPart = lowerCaseString.slice(0, lowerCaseString.length / 2);
  const secondPart =
    lowerCaseString.length % 2
      ? lowerCaseString.slice(lowerCaseString.length / 2 + 1)
      : lowerCaseString.slice(lowerCaseString.length / 2);

  return (
    firstPart ===
    secondPart
      .split("")
      .reverse()
      .join("")
  );
}

const q1 = "AaBaa"; // true
const q2 = "abac"; // false
const q3 = "aBACaba"; // true
const q4 = "opOP"; // false
const q5 = "ZZzzazZzz"; // true
const q6 = "zzzzazzzz"; // true
const q7 = "ZZzzabzZzz"; // false
const q8 = "abcdcbA"; // true
const q9 = "abracabra"; // false
const q10 = "abcd"; // false

console.log(isCaseInsensitivePalindrome(q1));
console.log(isCaseInsensitivePalindrome(q2));
console.log(isCaseInsensitivePalindrome(q3));
console.log(isCaseInsensitivePalindrome(q4));
console.log(isCaseInsensitivePalindrome(q5));
console.log(isCaseInsensitivePalindrome(q6));
console.log(isCaseInsensitivePalindrome(q7));
console.log(isCaseInsensitivePalindrome(q8));
console.log(isCaseInsensitivePalindrome(q9));
console.log(isCaseInsensitivePalindrome(q10));
