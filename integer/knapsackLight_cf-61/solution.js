function knapsackLight(value1, weight1, value2, weight2, maxW) {
  return value1 > value2
    ? maxW >= weight1
      ? maxW >= weight1 + weight2
        ? value1 + value2
        : value1
      : maxW >= weight2
        ? value2
        : 0
    : maxW >= weight2
      ? maxW >= weight1 + weight2
        ? value1 + value2
        : value2
      : maxW >= weight1
        ? value1
        : 0;
}
