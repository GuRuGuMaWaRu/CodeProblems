function findSlope(coords) {
  const changeInY = coords.y - 0;
  const changeInX = coords.x - 0;
  const slope = changeInY / changeInX;

  return `${slope},${Math.sign(coords.x)}`;
}

function solution(A) {
  const slopes = {};

  for (let i = 0, len = A.length; i < len; i++) {
    const slope = findSlope(A[i]);
    if (!slopes[slope]) {
      slopes[slope] = true;
    }
  }
  return Object.keys(slopes).length;
}
