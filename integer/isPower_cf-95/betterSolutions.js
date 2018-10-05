function isPower(n) {
  if (n == 1) return true;
  for (i = 2; i <= Math.sqrt(n); i++) {
    for (j = 2; Math.pow(i, j) < n; j++);
    if (Math.pow(i, j) == n) return true;
  }
  return false;
}

////////////////////////////////////////////////
function isPower(n) {
  return [...Array(n).keys()]
    .map(i => [...Array(n).keys()].map(j => i ** j == n).some(k => k == true))
    .some(i => i == true);
}
