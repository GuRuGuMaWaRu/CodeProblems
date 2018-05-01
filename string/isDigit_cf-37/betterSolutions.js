function isDigit(symbol) {
  return !isNaN(symbol);
}

//////////////////////////////
isDigit = s => /\d/.test(s);
