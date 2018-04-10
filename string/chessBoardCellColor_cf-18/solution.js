function chessBoardCellColor(cell1, cell2) {
  const even1 = (cell1[0].charCodeAt() + Number(cell1[1])) % 2;
  const even2 = (cell2[0].charCodeAt() + Number(cell2[1])) % 2;

  return even1 === even2;
}
