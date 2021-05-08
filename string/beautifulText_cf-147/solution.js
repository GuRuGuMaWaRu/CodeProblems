/*
Consider a string containing only letters and whitespaces. It is allowed to replace some (possibly, none) whitespaces with newline symbols to obtain a multiline text. Call a multiline text beautiful if and only if each of its lines (i.e. substrings delimited by a newline character) contains an equal number of characters (only letters and whitespaces should be taken into account when counting the total while newline characters shouldn't). Call the length of the line the text width.

Given a string and some integers l and r (l ≤ r), check if it's possible to obtain a beautiful text from the string with a text width that's within the range [l, r].

*/
function beautifulText(inputString, l, r) {
  // let isBeautiful = false;

  // for (let i = l - 1; i < r; i++) {
  //   if (inputString[i] === ' ') {
  //     isBeautiful = true;

  //     for (let j = i * 2 + 1; j <= inputString.length; j += i + 1) {
  //       console.log(
  //         `length: ${inputString.length}; i: ${i}; j: ${j}; char: ${inputString[j]}`
  //       );
  //       if (inputString[j] !== ' ') {
  //         // isBeautiful = false;
  //         break;
  //       }
  //     }
  //   }
  // }

  // return isBeautiful;

  // we use a loop with a step from l to r, and we ask ourselves at every junction whether we have a "space" before or after - if there is no space, then we
  // increase our step value and start anew

  // after we find the right step value, we should use it to split our string into chunks, trim hanging spaces, check if all resulting substring are equal in length
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
