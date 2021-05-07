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
function beautifulText(inputString, l, r) {
  let isBeautiful = false;

  for (let i = l - 1; i < r; i++) {
    if (inputString[i] === ' ') {
      isBeautiful = true;

      for (let j = i * 2 + 1; j <= inputString.length; j += i + 1) {
        console.log(
          `length: ${inputString.length}; i: ${i}; j: ${j}; char: ${inputString[j]}`
        );
        if (inputString[j] !== ' ') {
          // isBeautiful = false;
          break;
        }
      }
    }
  }

  return isBeautiful;
}

const q1 = ['Look at this example of a correct text', 5, 15]; // true
const q2 = ['abc def ghi', 4, 10]; // false
const q3 = ['a a a a a a a a', 1, 10]; // true
const q4 = ['ab cd fg xyz', 1, 5]; // false
const q5 = ['aa aa aaaaa aaaaa aaaaa', 6, 11]; // true
const q6 = ['aa aa aaaaa aaaaa aaaaa', 5, 10]; // true
const q7 = ['aa aa aaaaa aaaaa aaaaa', 6, 10]; // false
const q8 = ['aaa aaaaaaa', 3, 10]; // false
const q9 = ['dht skq dkg', 4, 10]; // false
const q10 = ['skspv iakqh ygzwz ntkmi xqhpj', 3, 7]; // true
const q11 = ['skspv iakqh ygzwz ntkmi xqhpj', 8, 9]; // false

console.log('q1:', beautifulText(...q1));
// console.log('q2:', beautifulText(...q2));
// console.log('q3:', beautifulText(...q3));
// console.log('q4:', beautifulText(...q4));
// console.log('q5:', beautifulText(...q5));
// console.log('q6:', beautifulText(...q6));
// console.log('q7:', beautifulText(...q7));
// console.log('q8:', beautifulText(...q8));
// console.log('q9:', beautifulText(...q9));
