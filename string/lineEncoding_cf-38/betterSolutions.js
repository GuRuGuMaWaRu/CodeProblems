lineEncoding = s => s.replace(/(.)\1*/g, (e, i) => (i == e ? i : e.length + i));

////////////////////////////
function lineEncoding(s) {
  return s.replace(/(.)\1+/g, chars => chars.length + chars[0]);
}

////////////////////////////
