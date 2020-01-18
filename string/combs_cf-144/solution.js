/*
Miss X has only two combs in her possession, both of which are old and miss a tooth or two. She also has many purses of different length, in which she carries the combs. The only way they fit is horizontally and without overlapping. Given teeth' positions on both combs, find the minimum length of the purse she needs to take them with her.

It is guaranteed that there is at least one tooth at each end of the comb.
It is also guaranteed that the total length of two strings is smaller than 32.
Note, that the combs can not be rotated/reversed.

Example

For comb1 = "*..*" and comb2 = "*.*", the output should be
combs(comb1, comb2) = 5.

Although it is possible to place the combs like on the first picture, the best way to do this is either picture 2 or picture 3.



Input/Output

[execution time limit] 4 seconds (js)

[input] string comb1

A comb is represented as a string. If there is an asterisk ('*') in the ith position, there is a tooth there. Otherwise there is a dot ('.'), which means there is a missing tooth on the comb.

Guaranteed constraints:
3 ≤ comb1.length ≤ 8.

[input] string comb2

The second comb is represented in the same way as the first one.

Guaranteed constraints:
1 ≤ comb2.length ≤ 5.

[output] integer

The minimum length of a purse Miss X needs.
*/

function combs(comb1, comb2) {
  const replaced1 = comb1.replace(/\.|\*/g, match => {
    switch (match) {
      case '*':
        return 1;
      default:
        return 0;
    }
  });
  const replaced2 = comb2.replace(/\.|\*/g, match => {
    switch (match) {
      case '*':
        return 1;
      default:
        return 0;
    }
  });

  const comb1Padded = replaced1.padEnd(
    replaced1.length + replaced2.length + replaced1.length,
    '0'
  );
  const comb2Padded = replaced2.padEnd(
    replaced1.length + replaced2.length,
    '0'
  );

  const comb1Num = parseInt(comb1Padded, 2);
  const comb2Num = parseInt(comb2Padded, 2);

  let finalLength = comb1.length + comb2.length;
  const testLength = comb1.length + comb2.length;
  const biggestComb =
    comb1.length >= comb2.length ? comb1.length : comb2.length;

  for (let i = 1; i < testLength; i++) {
    const shift = comb1Num >> i;
    const result = shift & comb2Num;

    if (result === 0) {
      if (i < biggestComb) {
        const length =
          testLength - i >= biggestComb ? testLength - i : biggestComb;

        if (length < finalLength) {
          finalLength = length;
        }
      } else {
        const length = i;

        if (length < finalLength) {
          finalLength = length;
        }
      }
    }
  }

  return finalLength;
}

const q1 = ['*..*', '*.*']; // 5
const q2 = ['*...*', '*.*']; // 5
const q3 = ['*..*.*', '*.***']; // 9
const q4 = ['*.*', '*.*']; // 4
const q5 = ['*.**', '*.*']; // 5

console.log('q1:', combs(...q1));
console.log('q2:', combs(...q2));
console.log('q3:', combs(...q3));
console.log('q4:', combs(...q4));
console.log('q5:', combs(...q5));
