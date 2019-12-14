/*
Given array of integers, for each position i, search among the previous positions for the last (from the left) position that contains a smaller value. Store this value at position i in the answer. If no such value can be found, store -1 instead.

Example

For items = [3, 5, 2, 4, 5], the output should be
arrayPreviousLess(items) = [-1, 3, -1, 2, 4].

Input/Output

[execution time limit] 4 seconds (js)

[input] array.integer items

Non-empty array of positive integers.

Guaranteed constraints:
3 ≤ items.length ≤ 15,
1 ≤ items[i] ≤ 200.

[output] array.integer

Array containing answer values computed as described above.
*/

function arrayPreviousLess(items) {
  return items.map((item, i) => {
    // const newArr = items.slice(0, i);
    let newItem = -1;

    for (let j = i; j >= 0; j--) {
      if (items[j] < item) {
        newItem = items[j];
        break;
      }
    }

    return newItem;
  });
}

const q1 = [3, 5, 2, 4, 5]; // [-1, 3, -1, 2, 4]
const q2 = [2, 2, 1, 3, 4, 5, 5, 3]; // [-1, -1, -1, 1, 3, 4, 4, 1]
const q3 = [3, 2, 1]; // [-1, -1, -1]
const q4 = [100, 101, 102]; // [-1, 100, 101]
const q5 = [7, 7, 8, 3, 4, 4, 2, 5, 6, 7, 7]; // [-1, -1, 7, -1, 3, 3, -1, 2, 5, 6, 6]
const q6 = [68, 135, 101, 170, 125]; // [-1, 68, 68, 101, 101]

console.log("q1:", arrayPreviousLess(q1));
console.log("q2:", arrayPreviousLess(q2));
console.log("q3:", arrayPreviousLess(q3));
console.log("q4:", arrayPreviousLess(q4));
console.log("q5:", arrayPreviousLess(q5));
console.log("q6:", arrayPreviousLess(q6));
