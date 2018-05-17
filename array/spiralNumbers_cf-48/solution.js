function spiralNumbers(n) {
  const spiralArr = [...Array(n)].map(el => Array(n));
  const max = n * n;
  let counter = 1;
  let isReverse = false;
  let isColumn = false;
  let constantAxis = 0;
  let newConstantAxis = 0;

  while (counter <= max) {
    if (isReverse && isColumn) {
      for (let i = n - 1; i >= 0; i--) {
        if (!spiralArr[i][constantAxis]) {
          newConstantAxis = i;
          spiralArr[i][constantAxis] = counter;
          counter += 1;
        }
      }
      isReverse = !isReverse;
    } else if (!isReverse && isColumn) {
      for (let i = 0; i < n; i++) {
        if (!spiralArr[i][constantAxis]) {
          newConstantAxis = i;
          spiralArr[i][constantAxis] = counter;
          counter += 1;
        }
      }
      isReverse = !isReverse;
    } else if (isReverse && !isColumn) {
      for (let i = n - 1; i >= 0; i--) {
        if (!spiralArr[constantAxis][i]) {
          newConstantAxis = i;
          spiralArr[constantAxis][i] = counter;
          counter += 1;
        }
      }
    } else if (!isReverse && !isColumn) {
      for (let i = 0; i < n; i++) {
        if (!spiralArr[constantAxis][i]) {
          console.log("is NULL");
          newConstantAxis = i;
          spiralArr[constantAxis][i] = counter;
          counter += 1;
        }
      }
    }

    isColumn = !isColumn;
    constantAxis = newConstantAxis;
  }

  return spiralArr;
}
