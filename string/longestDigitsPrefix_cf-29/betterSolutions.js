function longestDigitsPrefix(inputString) {
  return inputString.match(/^\d*/)[0];
}

/////////////////////////
function longestDigitsPrefix(s) {
  return (s.match(/^\d+/g) || [""])[0];
}
