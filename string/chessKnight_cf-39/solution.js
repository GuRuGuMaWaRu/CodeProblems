function chessKnight(cell) {
  const charsToNumbers = { a: 1, b: 2, c: 3, d: 4, e: 5, f: 6, g: 7, h: 8 };
  const coordX = charsToNumbers[cell[0]];
  const coordY = +cell[1];
  const moves = [
    [-2, 1],
    [-1, 2],
    [1, 2],
    [2, 1],
    [2, -1],
    [1, -2],
    [-1, -2],
    [-2, -1]
  ];
  let possibleMoves = 0;

  return moves.reduce((totalMoves, possibleMove) => {
    if (
      possibleMove[0] + coordX > 0 &&
      possibleMove[0] + coordX < 9 &&
      possibleMove[1] + coordY > 0 &&
      possibleMove[1] + coordY < 9
    ) {
      return totalMoves + 1;
    }

    return totalMoves;
  }, 0);
}
