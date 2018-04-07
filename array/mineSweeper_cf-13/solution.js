function minesweeper(matrix) {
  return matrix.map((row, rowIndex) => {
    return row.map((col, colIndex) => {
      let number = 0;
      const rowsStart = rowIndex === 0 ? rowIndex : rowIndex - 1;
      const rowsEnd = rowIndex === matrix.length - 1 ? rowIndex : rowIndex + 1;
      const colsStart = colIndex === 0 ? colIndex : colIndex - 1;
      const colsEnd = colIndex === row.length - 1 ? colIndex : colIndex + 1;

      for (let i = rowsStart; i <= rowsEnd; i++) {
        for (let j = colsStart; j <= colsEnd; j++) {
          if (i === rowIndex && j === colIndex) {
            continue;
          }
          number += matrix[i][j] === true ? 1 : 0;
        }
      }
      return number;
    });
  });
}
