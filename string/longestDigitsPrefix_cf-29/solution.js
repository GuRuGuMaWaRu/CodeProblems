function longestDigitsPrefix(inputString) {
  const matches = /^(\d+)/.exec(inputString);

  if (matches) {
    return matches[0];
  }

  return "";
}
