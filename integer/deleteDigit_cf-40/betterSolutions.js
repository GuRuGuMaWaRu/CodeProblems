deleteDigit = n =>
  Math.max(
    ...("" + n).split``.map((e, i, t) => t.filter((e, j) => j - i).join``)
  );

///////////////////////
function deleteDigit(n) {
  var digits = n.toString().split("");

  return digits
    .map((digit, i) => {
      var current = digits.slice();
      current.splice(i, 1);
      return current.join("");
    })
    .map(str => Number(str))
    .reduce((max, current) => (max > current ? max : current), 0);
}

//////////////////////////
function deleteDigit(n) {
  var max = 0,
    s;

  [...(n + "")].map((a, i) => {
    s = [...(n + "")];
    s.splice(i, 1);
    max = +s.join`` > max ? +s.join`` : max;
  });

  return max;
}
