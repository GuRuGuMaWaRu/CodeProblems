function addBorder(picture) {
  return [(x = "*".repeat(picture[0].length + 2))].concat(
    picture.map(d => "*" + d + "*"),
    x
  );
}
/////////////////////////////////////////
function addBorder(p) {
  return [(e = "*".repeat(p[0].length + 2))].concat(
    p.map(i => "*" + i + "*"),
    e
  );
}
/////////////////////////////////////////
function addBorder(picture) {
  picture.push("*".repeat(picture[0].length));
  picture.unshift("*".repeat(picture[0].length));
  return picture.map(x => "*" + x + "*");
}
