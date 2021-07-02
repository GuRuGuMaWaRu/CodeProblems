/*
 * The Problem:
 * Given a range of text width, between 'l' and 'r', see if its possible
 * to take the inputString, and by only replacing whitespace with \n
 * (new line characters), we achieve a string that is exactly the
 * width (between 'l' and 'r') on every line.
 *
 * Input: String, range (between l and r inclusive)
 * Output: Boolean
 *
 * Strategy:
 * 1) We just need a loop that starts by looking for whitespace at every
 *    potential width between l and r
 *    - if it finds it, return true.  if we get through r without finding it
 *      return false
 */

function beautifulText(inputString, l, r) {
  for (let i = l; i <= r; i++) {
    let regex = new RegExp('^(.{' + i + '}\\s)+.{' + i + '}$');
    if (regex.test(inputString)) return true;
  }
  return false;
}

// (.{' + i + '}\\s)+ - match any number of words of a certain length (i) with a space after
// .{' + i + '}$ - match a word of a certain length (i) at the end of a string

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
console.log('q2:', beautifulText(...q2));
console.log('q3:', beautifulText(...q3));
console.log('q4:', beautifulText(...q4));
console.log('q5:', beautifulText(...q5));
console.log('q6:', beautifulText(...q6));
console.log('q7:', beautifulText(...q7));
console.log('q8:', beautifulText(...q8));
console.log('q9:', beautifulText(...q9));
console.log('q10:', beautifulText(...q10));
console.log('q11:', beautifulText(...q11));

//////////////////////////////////////////////////////////////////

const beautifulText = (inputString, l, r) =>
  new RegExp(`^(.{${l}}\\s)+$`).test(inputString + ` `) ||
  (beautifulText(inputString, ++l, r) && l <= r);
