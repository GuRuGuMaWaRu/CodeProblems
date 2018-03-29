function areSimilar(a, b) {
  let discrepanciesA = [];
  let discrepanciesB = [];

  for (let i = 0, len = a.length; i < len; i++) {
    if (a[i] === b[i]) {
      continue;
    }

    discrepanciesA.push(a[i]);
    discrepanciesB.push(b[i]);

    if (discrepanciesA.length > 2) {
      return false;
    }
  }

  if (
    discrepanciesA.length === 1 ||
    discrepanciesA[0] !== discrepanciesB[1] ||
    discrepanciesA[1] !== discrepanciesB[0]
  ) {
    return false;
  }

  return true;
}
