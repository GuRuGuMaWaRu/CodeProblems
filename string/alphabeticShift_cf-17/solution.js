function alphabeticShift(inputString) {
  return inputString
    .split("")
    .map(char => {
      const charCode = char.charCodeAt(0);

      if (charCode === 122) {
        return String.fromCharCode(97);
      }

      return String.fromCharCode(charCode + 1);
    })
    .join("");
}
