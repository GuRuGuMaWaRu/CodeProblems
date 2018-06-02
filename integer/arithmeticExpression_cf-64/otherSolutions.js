function arithmeticExpression(A, B, C) {
  return [..."+-*/"].some(op => eval(`${A}${op}${B}`) === C);
}
