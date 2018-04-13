function compareString(str1, str2) {
  let diffs = 0;

  for (let index in str1) {
    if (str1[index] !== str2[index]) {
      diffs += 1;
    }
  }

  return diffs === 1 ? true : false;
}

function findConsecutive(currentString, restArr) {
  if (restArr.length < 1) {
    return true;
  }

  for (let i = 0, len = restArr.length; i < len; i++) {
    if (compareString(currentString, restArr[i])) {
      const newArr = [...restArr.slice(0, i), ...restArr.slice(i + 1)];

      if (findConsecutive(restArr[i], newArr)) {
        return true;
      }
    }
  }

  return false;
}

function stringsRearrangement(inputArray) {
  for (let i = 0, len = inputArray.length; i < len; i++) {
    const startingStr = inputArray[i];
    const restArr = [...inputArray.slice(0, i), ...inputArray.slice(i + 1)];

    if (findConsecutive(startingStr, restArr)) {
      return true;
    }
  }

  return false;
}
