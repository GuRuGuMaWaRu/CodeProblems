function digitsProduct(product) {
  if (product == 0) return 10;
  if (product == 1) return 1;
  var divisor = 10,
    power = 1,
    result = 0;
  while (product > 1) {
    if (--divisor == 1) return -1;
    while (product % divisor == 0) {
      product /= divisor;
      result += divisor * power;
      power *= 10;
    }
  }
  return result;
}

//////////////////////////////////
function digitsProduct(product) {
  "use strict";
  for (var i = 1; i < 600 * 600; i++) {
    var p = String(i)
      .split("")
      .map(Number)
      .reduce((acc, v) => acc * v, 1);
    if (p == product) {
      return i;
    }
  }
  return -1;
}
//////////////////////////////////
