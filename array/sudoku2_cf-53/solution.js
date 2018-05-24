function sudoku2(grid) {
  let rows = {};
  let columns = {};
  let minigrids = {};

  function checkMiniGrids(minigrid, value) {
    if (!minigrids[minigrid]) {
      minigrids[minigrid] = { [value]: true };
    } else if (!minigrids[minigrid][value]) {
      minigrids[minigrid][value] = true;
    } else {
      return false;
    }

    return true;
  }

  for (let i = 0, len = grid.length; i < len; i++) {
    for (let j = 0; j < len; j++) {
      if (Number(grid[i][j])) {
        const value = grid[i][j];

        // check rows
        if (!rows[i]) {
          rows[i] = { [value]: true };
        } else if (!rows[i][value]) {
          rows[i][value] = true;
        } else {
          return false;
        }

        // check columns
        if (!columns[j]) {
          columns[j] = { [value]: true };
        } else if (!columns[j][value]) {
          columns[j][value] = true;
        } else {
          return false;
        }

        // check mini-grids
        if (i < 3) {
          if (j < 3) {
            if (checkMiniGrids(0, value)) {
              continue;
            } else {
              return false;
            }
          } else if (j > 2 && j < 6) {
            if (checkMiniGrids(1, value)) {
              continue;
            } else {
              return false;
            }
          } else {
            if (checkMiniGrids(2, value)) {
              continue;
            }
            return false;
          }
        }
        if (i > 2 && i < 6) {
          if (j < 3) {
            if (checkMiniGrids(3, value)) {
              continue;
            } else {
              return false;
            }
          } else if (j > 2 && j < 6) {
            if (checkMiniGrids(4, value)) {
              continue;
            } else {
              return false;
            }
          } else {
            if (checkMiniGrids(5, value)) {
              continue;
            }
            return false;
          }
        }
        if (i > 5) {
          if (j < 3) {
            if (checkMiniGrids(6, value)) {
              continue;
            } else {
              return false;
            }
          } else if (j > 2 && j < 6) {
            if (checkMiniGrids(7, value)) {
              continue;
            } else {
              return false;
            }
          } else {
            if (checkMiniGrids(8, value)) {
              continue;
            }
            return false;
          }
        }
      }
    }
  }
  return true;
}
