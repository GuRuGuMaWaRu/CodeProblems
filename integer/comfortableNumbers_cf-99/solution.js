function sumNumbers(num) {
  let sum = 0;

  while (num) {
    sum += num % 10;
    num = Math.trunc(num / 10);
  }

  return sum;
  // return String(num)
  //   .split("")
  //   .reduce((total, currNumber) => total + parseInt(currNumber, 10), 0);
}

function comfortableNumbers(l, r) {
  let totalPairs = 0;

  for (let i = l; i <= r; i++) {
    for (let j = i + 1; j <= r; j++) {
      const sumA = sumNumbers(i);
      const sumB = sumNumbers(j);

      // console.log(i, sumA, j, sumB);
      if (j >= i - sumA && j <= i + sumA && i >= j - sumB && i <= j + sumB) {
        totalPairs++;
      }
    }
  }

  return totalPairs;
}

const v1 = [10, 12]; // 2
const v2 = [1, 9]; // 20
const v3 = [13, 13]; // 0
const v4 = [12, 108]; // 707
const v5 = [239, 777]; // 6166
const v6 = [1, 1000]; // 11435
const f1 = [1, 100]; // ???
const f2 = [1, 20]; // ???
const f3 = [400, 440]; // ???
const f4 = [720, 735]; // ???
const f5 = [720, 731]; // ???

// console.log(comfortableNumbers(...f5));
console.log(comfortableNumbers(...v1));
console.log(comfortableNumbers(...v2));
console.log(comfortableNumbers(...v3));
console.log(comfortableNumbers(...v4));
console.log(comfortableNumbers(...v5));
console.log(comfortableNumbers(...v6));
