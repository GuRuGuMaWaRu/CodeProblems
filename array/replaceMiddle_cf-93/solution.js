function replaceMiddle(arr) {
  return arr.length % 2 === 0
    ? [
        ...arr.slice(0, arr.length / 2 - 1),
        arr[arr.length / 2 - 1] + arr[arr.length / 2],
        ...arr.slice(arr.length / 2 + 1)
      ]
    : arr;
}

const v1 = [7, 2, 2, 5, 10, 7];
const v2 = [-5, -5, 10];
const v3 = [45, 23, 12, 33, 12, 453, -234, -45];

console.log(replaceMiddle(v1));
console.log(replaceMiddle(v2));
console.log(replaceMiddle(v3));
