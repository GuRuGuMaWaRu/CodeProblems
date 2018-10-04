function makeArrayConsecutive2(statues) {
  return Math.max(...statues) - Math.min(...statues) + 1 - statues.length;
}

const v1 = [6, 2, 3, 8];
const v2 = [0, 3];
const v3 = [5, 4, 6];
const v4 = [6, 3];
const v5 = [1];

console.log(makeArrayConsecutive2(v1));
console.log(makeArrayConsecutive2(v2));
console.log(makeArrayConsecutive2(v3));
console.log(makeArrayConsecutive2(v4));
console.log(makeArrayConsecutive2(v5));
