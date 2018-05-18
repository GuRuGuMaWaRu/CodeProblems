// True, if product of #s in row is 9!
p = a => eval(a.join`*`) == 362880;

// Check each row, column and 3 block grid using p()
sudoku = grid =>
  grid.every(
    (r, i) =>
      p(r) &&
      p(grid.map(r => r[i])) &&
      p(
        r.map(
          (_, j) => grid[3 * ((i / 3) | 0) + ((j / 3) | 0)][3 * (i % 3) + j % 3]
        )
      )
  );

///////////////////////////////////////////////////////////
