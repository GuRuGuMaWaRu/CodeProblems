sumOnes = x => (x ? 1 + sumOnes(x & (x - 1)) : 0);

function rangeBitCount(a, b) {
  var result = 0;
  while (a <= b) {
    result += sumOnes(a);
    a++;
  }
  return result;
}

////////////////////////////////

function rangeBitCount(a, b) {
  var packed = "";
  while (a <= b) {
    packed += a.toString(2);
    a++;
  }
  return packed.split("1").length - 1;
}
