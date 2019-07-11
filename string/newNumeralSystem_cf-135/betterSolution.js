function newNumeralSystem(number) {
  n = number.charCodeAt(0);

  r = [];
  for (i = 65; i <= n - i + 65; i++) {
    r.push(String.fromCharCode(i) + " + " + String.fromCharCode(n - i + 65));
  }

  return r;
}
