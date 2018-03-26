// function reverseParentheses(s) {
//   while (s != (s = s.replace(/\([^(]*?\)/, t => [...t].slice(1, -1).reverse().join(''))));
//   return s;
// }

function reverseParentheses(s) {

  while (s.indexOf(")", 0) != -1) {
    var c = s.indexOf(")", 0);
    var a = s.lastIndexOf('(', c);
    var b = s.slice(a + 1, c).split("").reverse().join("");
    var s = s.slice(0, a) + b + s.slice(c + 1);

  }
  return s;

}

