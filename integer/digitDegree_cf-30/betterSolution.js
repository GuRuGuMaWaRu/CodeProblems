function digitDegree(n) {
  if (n < 10) {
    return 0;
  }

  var sum = 0;
  while (n) {
    sum += n % 10;
    n = (n / 10) | 0;
  }

  if (sum < 10) {
    return 1;
  }

  return digitDegree(sum) + 1;
}

//////////////////////////////////////////
