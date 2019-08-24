function higherVersion(v1, v2) {
  (v1 = v1.split(".").map(i => Number(i))),
    (v2 = v2.split(".").map(i => Number(i))),
    (i = 0);
  while (i < v1.length && v1[i] == v2[i]) {
    i++;
  }
  return v1[i] > v2[i];
}
