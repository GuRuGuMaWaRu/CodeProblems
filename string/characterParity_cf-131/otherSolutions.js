function characterParity(symbol) {
  if (symbol >= "0" && symbol <= "9") {
    return symbol % 2 == 0 ? "even" : "odd";
  }
  return "not a digit";
}

//////////////////////////////////////////
