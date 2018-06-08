function arrayPacking(a) {
  return a.reduce((value, byte, i) => value + byte * Math.pow(256, i));
}

//////////////////////////////////
function arrayPacking(a) {
  ret = 0;
  for (i = 0; i < a.length; i++) ret += a[i] << (8 * i);
  return ret;
}

//////////////////////////////////
function arrayPacking(a) {
  return (a[3] << 24) | (a[2] << 16) | (a[1] << 8) | a[0];
}

//////////////////////////////////
