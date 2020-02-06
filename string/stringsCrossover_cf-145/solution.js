/*
Define crossover operation over two equal-length strings A and B as follows:

the result of that operation is a string of the same length as the input strings
result[i] is either A[i] or B[i], chosen at random
Given array of strings inputArray and a string result, find for how many pairs of strings from inputArray the result of the crossover operation over them may be equal to result.

Note that (A, B) and (B, A) are the same pair. Also note that the pair cannot include the same element of the array twice (however, if there are two equal elements in the array, they can form a pair).

Example

For inputArray = ["abc", "aaa", "aba", "bab"] and result = "bbb", the output should be
stringsCrossover(inputArray, result) = 2.

Input/Output

[execution time limit] 4 seconds (js)

[input] array.string inputArray

A non-empty array of equal-length strings.

Guaranteed constraints:
2 ≤ inputArray.length ≤ 10,
1 ≤ inputArray[i].length ≤ 10.

[input] string result

A string of the same length as each of the inputArray elements.

Guaranteed constraints:
result.length = inputArray[i].length.

[output] integer
*/

function stringsCrossover(inputArray, result) {
  let count = 0;

  for (let i = 0, len = inputArray.length; i < len; i++) {
    const firstStr = inputArray[i];

    for (let j = i + 1; j < len; j++) {
      const secondStr = inputArray[j];
      const secondStrSplit = secondStr.split('');

      const isFail = secondStrSplit.some((char, idx) => {
        if (firstStr[idx] !== result[idx] && char !== result[idx]) {
          return true;
        } else {
          return false;
        }
      });

      if (!isFail) {
        count += 1;
      }
    }
  }

  return count;
}

const q1 = [['abc', 'aaa', 'aba', 'bab'], 'bbb']; // 2
const q2 = [['aacccc', 'bbcccc'], 'abdddd']; // 0
const q3 = [['a', 'b', 'c', 'd', 'e'], 'c']; // 4
const q4 = [['aa', 'ab', 'ba'], 'bb']; // 1
const q5 = [['a', 'b', 'c', 'd', 'e'], 'f']; // 0
const q6 = [['aaa', 'aaa'], 'aaa']; // 1

console.log('q1:', stringsCrossover(...q1));
console.log('q2:', stringsCrossover(...q2));
console.log('q3:', stringsCrossover(...q3));
console.log('q4:', stringsCrossover(...q4));
console.log('q5:', stringsCrossover(...q5));
console.log('q6:', stringsCrossover(...q6));
