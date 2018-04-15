function differentSymbolsNaive(s) {
  return new Set(s).size;
}

///////////////////////////////////////

function differentSymbolsNaive(s) {
  s = s.split("");
  var distinct = {};

  for (x in s) {
    distinct[s[x]] = true;
  }

  return Object.keys(distinct).length;
}

///////////////////////////////////////

function differentSymbolsNaive(s) {
  t = "";
  s.split``.map(v => t.includes(v) || (t += v));
  return t.length;
}
