//Get the color (0=black, 1=white) for a given cell
var color = s => (Buffer(s)[0] - s[1]) % 2;

var chessBoardCellColor = (a, b) => color(a) == color(b);

//////////////////////////////////////

function chessBoardCellColor(cell1, cell2) {
  var a = cell1[0].charCodeAt(),
    b = cell2[0].charCodeAt(),
    c = +cell1[1],
    d = +cell2[1];
  return (a + c) % 2 === (b + d) % 2;
}

///////////////////////////////////////

function chessBoardCellColor(cell1, cell2) {
  var c1 = cell1.split("");
  var c2 = cell2.split("");
  return (
    (c1[0].charCodeAt(0) -
      c2[0].charCodeAt(0) +
      c1[1].charCodeAt(0) -
      c2[1].charCodeAt(0)) %
      2 ==
    0
  );
}
