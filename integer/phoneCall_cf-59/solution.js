function phoneCall(min1, min2_10, min11, s) {
  let total = 0;

  // min1
  total = s / min1 >= 1 ? 1 : 0;
  s = s / min1 >= 1 ? s - min1 : 0;

  // min2_10
  if (s - min2_10 * 9 >= 0) {
    total = total + 9;
    s = s - min2_10 * 9;
  } else {
    total = total + Math.floor(s / min2_10);
    s = 0;
  }

  // min11
  total = total + Math.floor(s / min11);

  return total;
}
