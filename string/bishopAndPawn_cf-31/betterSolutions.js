function bishopAndPawn(bishop, pawn) {
  return (
    Math.abs(bishop[0].charCodeAt() - pawn[0].charCodeAt()) ===
    Math.abs(bishop[1] - pawn[1])
  );
}

////////////////////////////////////////////
A = Math.abs;
B = Buffer;
bishopAndPawn = (b, p) => A(B(b)[0] - B(p)[0]) == A(b[1] - p[1]);
