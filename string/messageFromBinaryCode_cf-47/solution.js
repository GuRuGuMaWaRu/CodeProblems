function messageFromBinaryCode(code) {
  return code
    .match(/.{1,8}/g)
    .map(code => String.fromCharCode(parseInt(code, 2).toString(10)))
    .join("");
}
