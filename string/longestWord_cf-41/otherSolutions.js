function longestWord(text) {
  return text.match(/[A-Za-z]+/g).sort((a, b) => {
    return b.length > a.length;
  })[0];
}

////////////////////////////////
function longestWord(text) {
  var r = text.match(/[a-z]+/gi);
  for (var maxlen = 0, max = "", i = 0; i < r.length; i++) {
    if (r[i].length > maxlen) (maxlen = r[i].length), (max = r[i]);
  }
  return max;
}

///////////////////////////////////
function longestWord(text) {
  return text
    .split(/[^A-Za-z]+/)
    .filter(word => word.length > 0)
    .reduce((max, curr) => (max.length > curr.length ? max : curr), "");
}
