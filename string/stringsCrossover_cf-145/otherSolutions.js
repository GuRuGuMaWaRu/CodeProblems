function stringsCrossover(inputArray, result) {
  let res = 0;
  for (let i = 0; i < inputArray.length - 1; i++)
    for (let j = i + 1; j < inputArray.length; j++) {
      let check = true;
      for (let k = 0; k < result.length; k++)
        if (result[k] != inputArray[i][k] && result[k] != inputArray[j][k]) {
          check = false;
          break;
        }
      if (check) res++;
    }
  return res;
}
