function arrayReplace(inputArray, elemToReplace, substitutionElem) {
  return inputArray.map(
    elem => (elem === elemToReplace ? substitutionElem : elem)
  );
}

console.log(arrayReplace([1, 2, 1], 1, 3));
