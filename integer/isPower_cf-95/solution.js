function isPower(n) {
  const max = Math.sqrt(n);

  for (let i = 1; i <= max; i++) {
    for (let j = 1; j <= max; j++) {
      if (Math.pow(i, j) === n) {
        return true;
      }
    }
  }

  return false;
}

const v1 = 125; // true
const v2 = 72; // false
const v3 = 100; // true
const v4 = 11; // false

console.log(isPower(v1));
console.log(isPower(v2));
console.log(isPower(v3));
console.log(isPower(v4));
