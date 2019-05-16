function numberOfClans(d, k) {
  return new Set(
    [...Array(k).keys()].map(i => d.filter(j => (i + 1) % j == 0).toString())
  ).size;
}

//////////////////////////////
function numberOfClans(d, k) {
  let mySet = new Set();
  for (let i = 1; i <= k; i += 1) {
    mySet.add(d.map(elm => (i % elm === 0 ? 0 : 1)).toString());
  }
  return mySet.size;
}
