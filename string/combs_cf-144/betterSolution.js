function combs(c1, c2) {
  /* convert combs to binary string and parse int values. */
  var a = parseInt(
      c1.replace(/./g, a => (a == '*' ? 1 : 0)),
      2
    ),
    b = parseInt(
      c2.replace(/./g, a => (a == '*' ? 1 : 0)),
      2
    ),
    i = 0,
    j = 0;

  /* find first non-crossing point
   * - move a to left like descr. picture 2,
   * - move b to left like picture 3
   */
  while ((a << i) & b) i++;
  while ((b << j) & a) j++;
  /* return the smallest length */
  return Math.min(
    Math.max(c1.length + i, c2.length),
    Math.max(c2.length + j, c1.length)
  );
}
