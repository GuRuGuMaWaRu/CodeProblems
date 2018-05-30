function phoneCall(min1, min2_10, min11, S) {
  if (S < min1) return 0;
  S -= min1;
  if (S < min2_10 * 9) return (S / min2_10 + 1) | 0;
  S -= min2_10 * 9;
  return (S / min11 + 10) | 0;
}

///////////////////////////////////////
