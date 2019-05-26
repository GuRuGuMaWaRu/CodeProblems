function integerToStringOfFixedWidth(number, width) {
  return ("0".repeat(5) + number).slice(-width);
}
////////////////////////////////////////////////////////////
function integerToStringOfFixedWidth(number, width) {
  return `${number}`.padStart(width, "0").slice(-width);
}
