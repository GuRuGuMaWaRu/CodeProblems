function pairOfShoes(s) {
  let h = {};
  for (let i = 0; i < s.length; i++) {
    h[s[i][1]] = h[s[i][1]] || 0;
    h[s[i][1]] += s[i][0] == 1 ? 1 : -1;
  }
  return Object.values(h).filter(x => x != 0).length == 0;
}

///////////////////////////////////////
function pairOfShoes(shoes) {
  let pairs = {};
  for (let e of shoes) {
    if (pairs[e[1]] == undefined) pairs[e[1]] = 0;
    if (e[0]) {
      pairs[e[1]]++;
    } else {
      pairs[e[1]]--;
    }
  }
  return Object.values(pairs).every(e => e == 0);
}
