function isSmooth(arr) {
  if (arr.length % 2 === 0) {
    return (
      arr[0] === arr[arr.length / 2] + arr[arr.length / 2 - 1] &&
      arr[0] === arr[arr.length - 1]
    );
  } else {
    return (
      arr[0] === arr[(arr.length - 1) / 2] && arr[0] === arr[arr.length - 1]
    );
  }
}

const v1 = [-12, 34, 40, -5, -12, 4, 0, 0, -12];
const v2 = [9, 0, 15, 9];

console.log(isSmooth(v1));
console.log(isSmooth(v2));
