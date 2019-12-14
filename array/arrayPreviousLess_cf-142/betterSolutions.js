arrayPreviousLess = x =>
  x.map(
    (e, i) =>
      x
        .slice(0, i)
        .reverse()
        .find(v => v < e) || -1
  );

////////////////////////////////////////////
function arrayPreviousLess(items) {
  return items.map((a, i) => {
    for (let j = i - 1; j >= 0; j--) {
      if (items[j] < a) {
        return items[j];
      }
    }
    return -1;
  });
}
