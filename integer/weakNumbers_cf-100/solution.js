function findDivisors(num) {
  let divisors = 0;

  for (let i = 1; i <= num; i++) {
    if (num % i === 0) {
      divisors = divisors + 1;
    }
  }

  return divisors;
}

function weakNumbers(n) {
  const divisors = {};
  let weakness = 0;
  let weakest = 0;

  for (let i = 1; i <= n; i++) {
    const numberOfDivisors = findDivisors(i);

    if (numberOfDivisors > 0) {
      let count = 0;

      for (let number of Object.keys(divisors)) {
        if (number > numberOfDivisors) {
          count += divisors[number];
        }
      }

      if (divisors[numberOfDivisors]) {
        divisors[numberOfDivisors] = divisors[numberOfDivisors] + 1;
      } else {
        divisors[numberOfDivisors] = 1;
      }

      // check for weakness
      if (count > weakness) {
        weakness = count;
        weakest = 1;
      } else if (count === weakness) {
        weakest += 1;
      }
    }
  }

  return [weakness, weakest];
}

const v1 = 9; // [2, 2]
const v2 = 1; // [0, 1]
const v3 = 2; // [0, 2]
const v4 = 7; // [2, 1]
const v5 = 500; // [403, 1]
const v6 = 4; // [0, 4]

console.log(weakNumbers(v1));
console.log(weakNumbers(v2));
console.log(weakNumbers(v3));
console.log(weakNumbers(v4));
console.log(weakNumbers(v5));
console.log(weakNumbers(v6));
