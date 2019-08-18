function cipher26(message) {
  sum = 0;

  a = "a".charCodeAt(0);

  return message
    .split("")
    .map(x => {
      charCode = (x.charCodeAt(0) - a - sum + 26) % 26;
      sum = (sum + charCode) % 26;
      return String.fromCharCode(charCode + a);
    })
    .join("");
}
