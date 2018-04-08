function arrayReplace(inputArray, elemToReplace, substitutionElem) {
  return inputArray
    .join(",")
    .replace(RegExp(elemToReplace, "g"), substitutionElem)
    .split(",")
    .map(Number);
}
