function differentRightmostBit(n, m) {
  return (n ^ m) & -(n ^ m);
}

//////////////////////////////////////////////
function differentRightmostBit(n, m) {
  return (n ^= m) & -n;
}
