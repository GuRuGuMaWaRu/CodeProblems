function rectangleRotation(a, b) {
  var pointsA = Math.floor(Math.sqrt(a * a / 2)),
    pointsB = Math.floor(Math.sqrt(b * b / 2));
  return (pointsA * pointsB + Math.floor((pointsA + pointsB) / 2)) * 2 + 1;
}

/////////////////////
