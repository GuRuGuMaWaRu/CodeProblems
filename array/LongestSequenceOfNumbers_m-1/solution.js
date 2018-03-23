const getPreliminaries = (current, index, array) => {
  const ourArray = array.slice(index + 1);

  return ourArray.reduce(
    (sequences, number, index, array) => {
      let tmpArray = [];

      sequences.forEach(sequence => {
        if (number > sequence[sequence.length - 1]) {
          tmpArray.push([...sequence, number]);
        }
      });

      return tmpArray.length > 0 ? [...sequences, ...tmpArray] : sequences;
    },
    [[current]]
  );
};

const getSequence = (stringOfNumbers = "") => {
  //=== defend against edge cases
  if (stringOfNumbers.length === 0 || typeof stringOfNumbers !== "string") {
    return [];
  }
  //=== convert into array of numbers
  const arrayOfNumbers = stringOfNumbers.split(" ").map(parseFloat);

  return arrayOfNumbers
    .reduce(
      (final, current, index, array) => [
        ...final,
        ...getPreliminaries(current, index, array)
      ],
      []
    )
    .reduce(
      //=== compare lengths to determine the longest sequence
      (final, result) => (final.length < result.length ? result : final),
      []
    );
};

console.log(getSequence("9 2 1 10 4 5 6"));
console.log(getSequence("1 2 3 80 81 4 5 82 84 6 7 8 9"));
console.log(getSequence(""));
console.log(getSequence());
console.log(getSequence(6));
console.log(getSequence(NaN));
console.log(getSequence(undefined));
