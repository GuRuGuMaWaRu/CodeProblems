function isBeautifulString(inputString) {
  const sortedString = inputString.split("").sort();
  let maxNumber = 100;
  let charCode = "a".charCodeAt();

  while (true) {
    if (!sortedString.includes(String.fromCharCode(charCode))) {
      if (
        sortedString.lastIndexOf(String.fromCharCode(charCode - 1)) ===
        sortedString.length - 1
      ) {
        return true;
      } else if (
        sortedString.lastIndexOf(String.fromCharCode(charCode - 1)) !==
        sortedString.length - 1
      ) {
        return false;
      }
    }

    const charArr = inputString.slice(
      sortedString.indexOf(String.fromCharCode(charCode)),
      sortedString.lastIndexOf(String.fromCharCode(charCode)) + 1
    );

    if (charArr.length > maxNumber) {
      return false;
    }

    maxNumber = charArr.length;
    charCode = charCode + 1;
  }
}
