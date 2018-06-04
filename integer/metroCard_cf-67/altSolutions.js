function metroCard(lastNumberOfDays) {
  var result = {
    30: [31],
    28: [31],
    31: [28, 30, 31]
  };
  return result[lastNumberOfDays];
}
