function digitDegree(n) {
  let count = 0;

  while (n > 9) {
    const numbersArr = n
      .toString()
      .split("")
      .map(parseFloat);

    n = numbersArr.reduce((total, current) => total + current, 0);

    count += 1;
  }

  return count;
}
