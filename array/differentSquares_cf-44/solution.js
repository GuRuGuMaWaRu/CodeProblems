function differentSquares(matrix) {
  let squares = [];

  for (let i = 0, len = matrix.length - 1; i < len; i++) {
    for (let j = 0, lenJ = matrix[i].length - 1; j < lenJ; j++) {
      const square = `${matrix[i][j]}${matrix[i][j + 1]}${matrix[i + 1][j]}${
        matrix[i + 1][j + 1]
      }`;

      if (!squares.includes(square)) {
        squares.push(square);
      }
    }
  }

  return squares.length;
}
