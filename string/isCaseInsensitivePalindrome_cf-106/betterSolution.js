function isCaseInsensitivePalindrome(inputString) {
  const r = inputString
    .split("")
    .reverse()
    .join("");
  return inputString.toLowerCase() == r.toLowerCase();
}
