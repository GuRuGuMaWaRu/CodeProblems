function bishopAndPawn(bishop, pawn) {
  const xCoords = {
      a: 1,
      b: 2,
      c: 3,
      d: 4,
      e: 5,
      f: 6,
      g: 7,
      h: 8
    },
    bishopCoords = bishop.split(""),
    pawnCoords = pawn.split(""),
    xDiff = Math.abs(xCoords[bishopCoords[0]] - xCoords[pawnCoords[0]]),
    yDiff = Math.abs(bishopCoords[1] - pawnCoords[1]);

  return xDiff === yDiff;
}
