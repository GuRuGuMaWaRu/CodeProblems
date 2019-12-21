/*
Yesterday you found some shoes in the back of your closet. Each shoe is described by two values:

type indicates if it's a left or a right shoe;
size is the size of the shoe.
Your task is to check whether it is possible to pair the shoes you found in such a way that each pair consists of a right and a left shoe of an equal size.

Example

For

shoes = [[0, 21], 
         [1, 23], 
         [1, 21], 
         [0, 23]]
the output should be
pairOfShoes(shoes) = true;

For

shoes = [[0, 21], 
         [1, 23], 
         [1, 21], 
         [1, 23]]
the output should be
pairOfShoes(shoes) = false.

Input/Output

[execution time limit] 4 seconds (js)

[input] array.array.integer shoes

Array of shoes. Each shoe is given in the format [type, size], where type is either 0 or 1 for left and right respectively, and size is a positive integer.

Guaranteed constraints:
1 ≤ shoes.length ≤ 200,
1 ≤ shoes[i][1] ≤ 100.

[output] boolean

true if it is possible to pair the shoes, false otherwise.
*/

function pairOfShoes(shoes) {
  const shoesObj = {};

  shoes.forEach(shoe => {
    const isLeft = shoe[0] === 0;
    const size = shoe[1];

    if (!shoesObj[size]) {
      shoesObj[size] = isLeft ? -1 : 1;
    } else {
      shoesObj[size] += isLeft ? -1 : 1;
    }
  });

  for (let shoe in shoesObj) {
    if (shoesObj[shoe] !== 0) {
      return false;
    }
  }

  return true;
}

const q1 = [
  [0, 21],
  [1, 23],
  [1, 21],
  [0, 23]
]; // true
const q2 = [
  [0, 21],
  [1, 23],
  [1, 21],
  [1, 23]
]; // false
const q3 = [
  [0, 23],
  [1, 21],
  [1, 23],
  [0, 21],
  [1, 22],
  [0, 22]
]; // true
const q4 = [
  [0, 23],
  [1, 21],
  [1, 23],
  [0, 21]
]; // true
const q5 = [
  [1, 41],
  [1, 40],
  [1, 45],
  [0, 42],
  [0, 42],
  [0, 42]
]; // false
const q6 = [
  [1, 2],
  [0, 2],
  [1, 1],
  [0, 1],
  [1, 2],
  [0, 1]
]; // false

console.log("q1:", pairOfShoes(q1));
console.log("q2:", pairOfShoes(q2));
console.log("q3:", pairOfShoes(q3));
console.log("q4:", pairOfShoes(q4));
console.log("q5:", pairOfShoes(q5));
console.log("q6:", pairOfShoes(q6));
