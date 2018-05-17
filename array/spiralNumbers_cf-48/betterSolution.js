function spiralNumbers(n) {
  var matrix = [...Array(n)].map(_ => []),
    x = 0,
    y = 0,
    dir = 2,
    size = n,
    c = 0;
  for (var i = 1; i <= n * n; i++) {
    matrix[y][x] = i;
    if (++c == size) {
      dir = (dir + 1) % 4;
      size -= dir % 2;
      c = 0;
    }
    if (dir % 2 == 0) {
      x += dir > 1 ? 1 : -1;
    } else {
      y += dir > 1 ? 1 : -1;
    }
  }
  return matrix;
}

////////////////////////////////////////////////////////////
// !~!~!~!~!~!~!~!~!~!~!~!~!~!~!~!~!~!~!~!~!~!~!~!~!~!~!~!~

function spiralNumbers(n) {
  var i = 0,
    j = 0,
    k = 1,
    direction = "right";
  var arr = [...Array(n).keys()].map(i => Array(n)); //Create an empty n*n matrix
  while (k <= n * n) {
    if (!arr[i][j]) {
      arr[i][j] = k;
      k++;
    }
    switch (
      direction //Checks next step
    ) {
      case "right":
        if (j + 1 < n && !arr[i][j + 1]) j++;
        else direction = "down";
        break;
      case "down":
        if (i + 1 < n && !arr[i + 1][j]) i++;
        else direction = "left";
        break;
      case "left":
        if (j > 0 && !arr[i][j - 1]) j--;
        else direction = "up";
        break;
      case "up":
        if (i > 0 && !arr[i - 1][j]) i--;
        else direction = "right";
        break;
    }
  }
  return arr;
}
