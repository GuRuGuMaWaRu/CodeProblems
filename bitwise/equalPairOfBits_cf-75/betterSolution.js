function equalPairOfBits(n, m) {
  return ~(n ^= m) & -~n;
}

///////////////////////////////////////
function equalPairOfBits(n, m) {
  return ~(n ^ m) & ((n ^ m) + 1);
}

///////////////////////////////////////
function equalPairOfBits(n, m) {
  return (n ^ ~m) & -(n ^ ~m);
}
