function isIPv4Address(inputString) {
  const intoArray = inputString.split(".");

  if (intoArray.length !== 4) return false;

  for (let num in intoArray) {
    if (intoArray[num].length < 1) return false;

    const intoNum = Number(intoArray[num]);

    if (intoNum !== intoNum) return false;
    if (intoNum < 0 || intoNum > 255) return false;
  }

  return true;
}
