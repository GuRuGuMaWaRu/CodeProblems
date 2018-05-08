function sumUpNumbers(inputString) {
  return (inputString.match(/\d+/g) || []).reduce((a, b) => a + +b, 0);
}

///////////////////////////
