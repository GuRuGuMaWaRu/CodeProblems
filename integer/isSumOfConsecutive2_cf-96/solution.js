function isSumOfConsecutive2(n) {
  const max1 = Math.floor(n / 2);
  const max2 = Math.ceil(n / 2);
  let sum = 0;
  let allSums = 0;

  for (let i = 1; i <= max1; i++) {
    sum = i;
    for (let j = i + 1; j <= max2; j++) {
      sum += j;

      if (sum > n) {
        break;
      } else if (sum === n) {
        allSums += 1;
        break;
      }
    }
  }

  return allSums;
}

const v1 = 9; // 2
const v2 = 8; // 0
const v3 = 15; // 3

console.log(isSumOfConsecutive2(v1));
console.log(isSumOfConsecutive2(v2));
console.log(isSumOfConsecutive2(v3));
