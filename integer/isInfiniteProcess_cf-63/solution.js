function isInfiniteProcess(a, b) {
  if (a === b) return false;
  if ((a % 2 !== 0 && b % 2 === 0) || (a % 2 === 0 && b % 2 !== 0)) return true;

  return !(a < b - 1);
}
