function knapsackLight(value1, weight1, value2, weight2, maxW) {
  return Math.max(
    maxW >= weight1 && value1,
    maxW >= weight2 && value2,
    maxW >= weight1 + weight2 && value1 + value2
  );
}

///////////////////////
function knapsackLight(v1, w1, v2, w2, maxW) {
  return Math.max(
    v1 * (w1 <= maxW),
    v2 * (w2 <= maxW),
    (v1 + v2) * (w1 + w2 <= maxW)
  );
}
