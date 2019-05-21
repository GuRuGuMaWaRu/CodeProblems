function switchLights(a) {
  return a.map((j, i) => (j + a.slice(i).reduce((x, y) => x + y)) % 2);
}

/////////////////////////////////
function switchLights(a) {
  let num = a.reduce((a, b) => a + b, 0);
  return a.map(elm => {
    if (elm === 1) num -= 1;
    return num % 2;
  });
}
