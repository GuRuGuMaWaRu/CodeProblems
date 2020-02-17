function cyclicString(s) {
  var length = 1;
  while (
    s
      .slice(0, length)
      .repeat(s.length)
      .slice(0, s.length) != s
  )
    length++;
  return length;
}

function cyclicString(s) {
  c = 1;
  while (
    s
      .slice(0, c)
      .repeat(s.length)
      .slice(0, s.length) != s
  ) {
    c++;
  }
  return c;
}

const cyclicString = s =>
  s.replace(/^(.*)(.*)\1$/, '$1$2').replace(/^(.*?)\1*$/, '$1').length;
