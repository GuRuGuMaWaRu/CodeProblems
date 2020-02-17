/*
You're given a substring s of some cyclic string. What's the length of the smallest possible string that can be concatenated to itself many times to obtain this cyclic string?

Example

For s = "cabca", the output should be
cyclicString(s) = 3.

"cabca" is a substring of a cycle string "abcabcabcabc..." that can be obtained by concatenating "abc" to itself. Thus, the answer is 3.

Input/Output

[execution time limit] 4 seconds (js)

[input] string s

Guaranteed constraints:
3 ≤ s.length ≤ 15.

[output] integer
*/
function cyclicString(s) {
  for (let i = 0, len = s.length; i < len; i++) {
    const substring = s.slice(0, i);
    const testSubstring = substring.repeat(s.length * 2);

    if (testSubstring.includes(s)) {
      return substring.length;
    }
  }

  return s.length;
}

const q1 = 'cabca'; // 3
const q2 = 'aba'; // 2
const q3 = 'ccccccccccc'; // 1
const q4 = 'bcaba'; // 5
const q5 = 'abacabaabacab'; // 7
const q6 = 'aab'; // 3
const q7 = 'abaaba'; // 3
const q8 = 'zazazaza'; // 2
const q9 = 'abbaab'; // 4

console.log('q1:', cyclicString(q1));
console.log('q2:', cyclicString(q2));
console.log('q3:', cyclicString(q3));
console.log('q4:', cyclicString(q4));
console.log('q5:', cyclicString(q5));
console.log('q6:', cyclicString(q6));
console.log('q7:', cyclicString(q7));
console.log('q8:', cyclicString(q8));
console.log('q9:', cyclicString(q9));
