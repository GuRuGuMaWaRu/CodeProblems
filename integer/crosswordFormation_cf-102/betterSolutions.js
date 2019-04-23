function crosswordFormation(w) {
  return p(w.length, w.length, w);
}

function p(n, s, l) {
  var c = 0;
  if (s == 1) {
    for (d1 = 0; d1 < l[0].length - 2; d1++) {
      s1 = l[1]
        .split("")
        .map((j, i) => (j == l[0][d1] ? i : -1))
        .filter(i => i != -1);
      for (d2 = d1 + 2; d2 < l[0].length; d2++) {
        s2 = l[2]
          .split("")
          .map((j, i) => (j == l[0][d2] ? i : -1))
          .filter(i => i != -1);
        for (cw1 of s1) {
          for (cw2 of s2) {
            for (i = 0; i < l[1].slice(cw1 + 2).length; i++) {
              for (j = 0; j < l[3].slice(d2 - d1).length; j++) {
                c +=
                  l[1].slice(cw1 + 2)[i] == l[3][j] &&
                  l[2].slice(cw2 + 2)[i] == l[3].slice(d2 - d1)[j];
              }
            }
          }
        }
      }
    }
  } else {
    for (var i = 0; i < s; i++) {
      c += p(n, s - 1, l);
      if (s % 2) {
        [l[0], l[s - 1]] = [l[s - 1], l[0]];
      } else {
        [l[i], l[s - 1]] = [l[s - 1], l[i]];
      }
    }
  }
  return c;
}
