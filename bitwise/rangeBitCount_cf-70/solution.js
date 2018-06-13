function rangeBitCount(a, b) {
  let total = 0;

  for (let i = a; i <= b; i++) {
    total += i.toString(2).replace(/0/g, "").length;
  }

  return total;
}
