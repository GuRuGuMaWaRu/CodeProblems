function alphabetSubsequence(s) {
  return s == [...new Set(s)].sort().join("");
}

/////////////////////////////////////
function alphabetSubsequence(s) {
  a = s.split("");
  for (i = 0; i < a.length - 1; i++) {
    if (a[i] >= a[i + 1]) return false;
  }
  return true;
}
