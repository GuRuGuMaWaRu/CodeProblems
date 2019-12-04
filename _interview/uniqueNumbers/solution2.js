const uniqueNumbers = numbers => {
  return numbers.filter((currNum, i) => {
    const converted = [...numbers.slice(0, i), ...numbers.slice(i + 1)];
    if (!converted.includes(currNum)) {
      return currNum;
    }
  });
};

const q1 = [6, 1, 3, 4, 1, 6]; // [3, 4]
const q2 = [1, 1, 3, 4, 6, 6, 7, 5]; // [3, 4, 7, 5]

console.log(uniqueNumbers(q1));
console.log(uniqueNumbers(q2));
