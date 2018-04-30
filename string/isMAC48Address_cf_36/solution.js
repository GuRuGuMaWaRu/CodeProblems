function isMAC48Address(inputString) {
  const strToArr = inputString.split("-");

  if (strToArr.length !== 6) {
    return false;
  }

  return strToArr.filter(str => /^[0-9A-F][0-9A-F]$/.test(str)).length === 6;
}
