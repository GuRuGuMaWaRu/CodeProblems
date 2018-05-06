function longestWord(text) {
  return text.split(/\W+/).sort((w1, w2) => w2.length - w1.length)[0];
}
