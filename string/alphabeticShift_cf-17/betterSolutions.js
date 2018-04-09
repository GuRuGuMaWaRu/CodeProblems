function alphabeticShift(s) {
  var c = "abcdefghijklmnopqrstuvwxyza";
  return s.replace(/./g, x => c[c.indexOf(x) + 1]);
}

///////////////////////////////////

B = Buffer;
alphabeticShift = s => B([...B(s)].map(e => (e - 96) % 26 + 97)) + "";
