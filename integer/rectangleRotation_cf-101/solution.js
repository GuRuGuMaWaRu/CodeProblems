function rectangleRotation(a, b) {
  const first = Math.floor(b / (2 * Math.sqrt(2)) * 2);
  const second = Math.floor(a / (2 * Math.sqrt(2)) * 2);
  const result = second * first + (second + 1) * (first + 1);
  return result % 2 === 0 ? result - 1 : result;
}

const q1 = [6, 4]; // 23
const q2 = [30, 2]; // 65
const q3 = [8, 6]; // 49
const q4 = [16, 20]; // 333
const q5 = [20, 32]; // 653
const q6 = [30, 26]; // 795

console.log(rectangleRotation(...q1));
console.log(rectangleRotation(...q2));
console.log(rectangleRotation(...q3));
console.log(rectangleRotation(...q4));
console.log(rectangleRotation(...q5));
console.log(rectangleRotation(...q6));
