function checkNeighbours(row, col, image) {
  const nw = image[row - 1][col - 1];
  const n = image[row - 1][col];
  const ne = image[row - 1][col + 1];
  const w = image[row][col - 1];
  const current = image[row][col];
  const e = image[row][col + 1];
  const sw = image[row + 1][col - 1];
  const s = image[row + 1][col];
  const se = image[row + 1][col + 1];
  const neighbours = [nw, n, ne, w, current, e, sw, s, se];
  const total = neighbours.reduce((total, current) => total + current, 0);

  return Math.floor(total / 9);
}

function boxBlur(image) {
  let finalImage = [];
  const imageLen = image.length;

  for (let i = 1; i < imageLen - 1; i++) {
    let imageRow = [];
    for (let j = 1; j < image[i].length - 1; j++) {
      imageRow.push(checkNeighbours(i, j, image));
    }
    finalImage.push(imageRow);
  }

  return finalImage;
}
