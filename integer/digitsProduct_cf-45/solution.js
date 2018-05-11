function digitsProduct(product) {
  for (let i = 1; i < 9999; i++) {
    const metaProduct = i
      .toString()
      .split("")
      .map(parseFloat)
      .reduce((total, num) => total * num, 1);
    // console.log(metaProduct)
    if (metaProduct === product) {
      return i;
    }
  }
  return -1;
}
