function sumUpNumbers(inputString) {
  const matches = inputString.match(/\d+/g) || [];
  return matches.reduce((total, item) => total + parseInt(item), 0);
}
