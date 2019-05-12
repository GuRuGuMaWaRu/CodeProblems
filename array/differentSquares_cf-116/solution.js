/*

Given a rectangular matrix containing only digits, calculate the number of different 2 × 2 squares in it.

Example

For

matrix = [[1, 2, 1],
          [2, 2, 2],
          [2, 2, 2],
          [1, 2, 3],
          [2, 2, 1]]
the output should be
differentSquares(matrix) = 6.

Here are all 6 different 2 × 2 squares:

1 2
2 2
2 1
2 2
2 2
2 2
2 2
1 2
2 2
2 3
2 3
2 1
Input/Output

[execution time limit] 4 seconds (js)

[input] array.array.integer matrix

Guaranteed constraints:
1 ≤ matrix.length ≤ 100,
1 ≤ matrix[i].length ≤ 100,
0 ≤ matrix[i][j] ≤ 9.

[output] integer

The number of different 2 × 2 squares in matrix.

*/

function differentSquares(matrix) {
  const myMatrix = new Set();

  for (let i = 0, len = matrix.length; i < len - 1; i++) {
    for (let j = 0, lenJ = matrix[i].length; j < lenJ - 1; j++) {
      const square = `${matrix[i][j]}${matrix[i][j + 1]}${matrix[i + 1][j]}${
        matrix[i + 1][j + 1]
      }`;

      myMatrix.add(square);
    }
  }

  return myMatrix.size;
}

const q1 = [[1, 2, 1], [2, 2, 2], [2, 2, 2], [1, 2, 3], [2, 2, 1]]; // 6
const q2 = [
  [9, 9, 9, 9, 9],
  [9, 9, 9, 9, 9],
  [9, 9, 9, 9, 9],
  [9, 9, 9, 9, 9],
  [9, 9, 9, 9, 9],
  [9, 9, 9, 9, 9]
]; // 1
const q3 = [[3]]; // 0
const q4 = [[3, 4, 5, 6, 7, 8, 9]]; // 0
const q5 = [[3], [4], [5], [6], [7]]; // 0
const q6 = [
  [2, 5, 3, 4, 3, 1, 3, 2],
  [4, 5, 4, 1, 2, 4, 1, 3],
  [1, 1, 2, 1, 4, 1, 1, 5],
  [1, 3, 4, 2, 3, 4, 2, 4],
  [1, 5, 5, 2, 1, 3, 1, 1],
  [1, 2, 3, 3, 5, 1, 2, 4],
  [3, 1, 4, 4, 4, 1, 5, 5],
  [5, 1, 3, 3, 1, 5, 3, 5],
  [5, 4, 4, 3, 5, 4, 4, 4]
]; // 54
const q7 = [[1, 1, 1, 1, 1, 1, 2, 2, 2, 3, 3, 3, 9, 9, 9, 2, 3, 9]]; // 0

console.log(differentSquares(q1));
console.log(differentSquares(q2));
console.log(differentSquares(q3));
console.log(differentSquares(q4));
console.log(differentSquares(q5));
console.log(differentSquares(q6));
console.log(differentSquares(q7));
