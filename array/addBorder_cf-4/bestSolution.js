function addBorder(picture) {
  var width = picture[0].length + 2;
  return [
    "*".repeat(width),
    ...picture.map(line => `*${line}*`),
    "*".repeat(width)
  ];
}

// chinese developer

addBorder = p => [
  (t = p[0].replace(/./g, "*") + "**"),
  ...p.map(v => `*${v}*`),
  t
];
