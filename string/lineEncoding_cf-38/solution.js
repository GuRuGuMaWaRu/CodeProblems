function lineEncoding(s) {
  let charcode = "A";
  const charArr = [];
  let counter = "";

  for (let char of s) {
    if (char !== charcode) {
      charArr.push(counter);
      counter = char;
      charcode = char;
    } else {
      counter += char;
    }
  }

  charArr.push(counter);

  return charArr
    .map(chars => {
      if (chars.length > 1) {
        return chars.length + chars[0];
      }
      return chars;
    })
    .join("");
}
