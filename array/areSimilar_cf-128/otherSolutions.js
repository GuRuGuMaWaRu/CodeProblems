areSimilar = (a, b) => {
  return (
    a.reduce((a, e, i) => (e == b[i] ? a : (a += 1)), 0) < 3 &&
    a.sort().join() == b.sort().join()
  );
};

////////////////////////////////////////////////////
function areSimilar(a, b) {
  firstDiff = -1;
  secondDiff = -1;

  for (i = 0; i < a.length; i++) {
    if (a[i] != b[i]) {
      if (firstDiff == -1) {
        firstDiff = i;
      } else if (
        secondDiff == -1 &&
        a[firstDiff] == b[i] &&
        a[i] == b[firstDiff]
      ) {
        secondDiff = i;
      } else {
        return false;
      }
    }
  }
  return true;
}
////////////////////////////////////////////////////
function areSimilar(a, b) {
  d = 0;
  for (i = 0; i < a.length; i++) {
    if (a[i] != b[i]) d++;
  }

  a.sort((x, y) => x - y);
  b.sort((x, y) => x - y);

  for (i = 0; i < a.length; i++) {
    if (a[i] != b[i]) return false;
  }

  return d <= 2;
}
////////////////////////////////////////////////////
function areSimilar(a, b) {
  if (a.toString() === b.toString()) return true;

  let c = [];
  let d = [];

  for (let i = 0; i < a.length; i++) {
    if (a[i] !== b[i]) {
      c.push(a[i]);
      d.push(b[i]);
    }
  }
  d = d.reverse();

  if (c.length === 2 && c.toString() === d.toString()) return true;

  return false;
}
