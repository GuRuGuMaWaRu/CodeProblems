function checkGrid(grid) {
  const numbers = grid.reduce((nums, num) => {
    if (!nums[num]) nums[num] = true;
    return nums;
  }, {});
  return Object.keys(numbers).length === 9;
}

function sudoku(grid) {
  for (let i = 0, len = grid.length; i < len; i += 1) {
    let newSet = new Set(grid[i]);
    if (newSet.size < 9) {
      return false;
    }

    let checkArray = [];

    for (let j = 0, lenJ = grid.length; j < lenJ; j += 1) {
      checkArray.push(grid[j][i]);
    }

    newSet = new Set(checkArray);
    if (newSet.size < 9) {
      return false;
    }
  }

  for (let i = 0, len = grid.length; i < len; i += 3) {
    for (let j = 0, lenJ = grid.length; j < lenJ; j += 3) {
      const isSudoku = checkGrid([
        ...grid[i].slice(j, j + 3),
        ...grid[i + 1].slice(j, j + 3),
        ...grid[i + 2].slice(j, j + 3)
      ]);

      if (!isSudoku) {
        return false;
      }
    }
  }
  return true;
}
