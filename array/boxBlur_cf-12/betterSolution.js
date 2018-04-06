boxBlur = I => {
  //Slice off the border
  var B = I.slice(1, -1).map(e => e.slice(1, -1));

  //Replace every element with the average
  // of its neighbors
  return B.map((row, i) =>
    row.map((elem, j) => {
      var sum = 0;
      for (var x = 0; x < 3; ++x)
        for (var y = 0; y < 3; ++y) sum += I[i + x][j + y];
      return (sum / 9) | 0;
    })
  );
};

//////////////////////////////////////////
/**
 * Blurring as a concept is simply taking the average of all values that condense to a pixel.
 * So, we calculate the sum of all corresponding numbers of a particular pixel.
 * Then, we divide by the amount of numbers that correspond to that pixel.
 *
 * To avoid performing a lot of division operations, we should save that until the very end.
 *
 * Therefore, all we care about the in the algorithm is getting those sums.
 * The simplest way to get the sums is to:
 *
 * • Do a rolling total across each row, getting the sum of every subset [i...i+3]
 * • Do a rolling total down each column, getting the sum of every subset [j...j+3]
 *
 * The below implementation is this, but performed with `map` and `reduce`.
 */

rowSum = (a, b) => a.map((x, i) => x + (b[i] || 0));
rowDiff = (a, b) => a.map((x, i) => x - (b[i] || 0));

blurRow = (blurred, x, i, arr) => (
  (i -= 2),
  i <= 0
    ? (blurred[0] = x + (blurred[0] || 0))
    : (blurred[i] = x + blurred[i - 1] - arr[i - 1]),
  blurred
);

blurRows = (blurred, x, i, arr) => (
  (i -= 2),
  i <= 0
    ? (blurred[0] = rowSum(x, blurred[0] || []))
    : (blurred[i] = rowDiff(rowSum(blurred[i - 1], x), arr[i - 1])),
  blurred
);

boxBlur = image =>
  image
    .map(x => x.reduce(blurRow, []))
    .reduce(blurRows, [])
    .map(x => x.map(x => Math.floor(x / 9)));

//////////////////////////////////////////

function boxBlur(image) {
  var answer = [];
  for (var x = 1; x < image.length - 1; x++) {
    var line = [];
    for (var y = 1; y < image[0].length - 1; y++) {
      var sum = 0;
      for (var dx = -1; dx <= 1; dx++) {
        for (var dy = -1; dy <= 1; dy++) {
          sum += image[x + dx][y + dy];
        }
      }
      line.push(Math.floor(sum / 9));
    }
    answer.push(line);
  }
  return answer;
}

///////////////////////////////////////
function boxBlur(image) {
  var blured = [];
  for (var i = 1; i < image.length - 1; i++) {
    var row = [];
    for (var j = 1; j < image[i].length - 1; j++) {
      var average = image[i - 1][j - 1] + image[i - 1][j] + image[i - 1][j + 1];
      average += image[i][j - 1] + image[i][j] + image[i][j + 1];
      average += image[i + 1][j - 1] + image[i + 1][j] + image[i + 1][j + 1];
      row.push(Math.floor(average / 9));
    }
    blured.push(row);
  }
  return blured;
}
