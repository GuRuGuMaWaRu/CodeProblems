function houseOfCats(legs) {
  return [...Array(legs / 2 + 1).keys()].filter(i => (legs - 2 * i) % 4 == 0);
}
