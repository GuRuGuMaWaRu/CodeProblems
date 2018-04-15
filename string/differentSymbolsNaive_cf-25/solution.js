function differentSymbolsNaive(s) {
  const differentSymbols = {};

  s.split("").forEach(char => {
    if (!differentSymbols[char]) differentSymbols[char] = true;
  });

  return Object.keys(differentSymbols).length;
}
