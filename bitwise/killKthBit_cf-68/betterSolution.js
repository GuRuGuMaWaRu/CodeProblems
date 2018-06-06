function killKthBit(n, k) {
  return n & ~(1 << (k - 1));
}

//////////////////////
function killKthBit(n, k) {
  return n & ~Math.pow(2, k - 1);
}

//////////////////////
function killKthBit(n, k) {
  return n & (0x7fffffff ^ (1 << (k - 1)));
}

//////////////////////
function killKthBit(n, k) {
  return n & (n ^ (1 << (k - 1)));
}

//////////////////////
function killKthBit(n, k) {
  return (n | (1 << (k - 1))) ^ (1 << (k - 1));
}
