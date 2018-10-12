function squareDigitsSequence(a0) {
  l = [a0];
  while (true) {
    for (i of l) {
      if (l.length - new Set(l).size + 1 > 1) {
        return l.length;
      }
    }
    s = 0;
    for (i of l[l.length - 1].toString()) {
      s += Number(i) ** 2;
    }
    l.push(s);
  }
}

///////////////////////////////////////////
function squareDigitsSequence(a0) {
  let curr = a0;
  let prev = [];
  while (prev.indexOf(curr) === -1) {
    prev.push(curr);
    let next = 0;
    while (curr > 0) {
      next += (curr % 10) * (curr % 10);
      curr = Math.floor(curr / 10);
    }
    curr = next;
  }
  return prev.length + 1;
}

///////////////////////////////////////////
function squareDigitsSequence(a0) {
  let seqCount = 1;
  let construct = a0;
  let seen = new Set();

  while (!seen.has(construct)) {
    seen.add(construct);
    construct = String(construct)
      .split("")
      .map(e => Math.pow(+e, 2))
      .reduce((a, e) => a + e);
    seqCount++;
  }

  return seqCount;
}
