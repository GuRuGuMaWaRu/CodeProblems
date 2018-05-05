function deleteDigit(n) {
  const numToStr = String(n);

  for (let i = 0, len = numToStr.length; i < len; i++) {
    if (
      +numToStr[i] < +numToStr[i + 1] ||
      (i === len - 1 && +numToStr[i] < +numToStr[i - 1])
    ) {
      return +(numToStr.slice(0, i) + numToStr.slice(i + 1));
    }
  }
}
