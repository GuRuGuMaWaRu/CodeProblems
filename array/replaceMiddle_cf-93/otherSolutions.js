function replaceMiddle(arr) {
  l = arr.length - 1;
  if (l % 2) {
    arr[Math.floor(l / 2)] += arr[Math.ceil(l / 2)];
    arr.splice(Math.ceil(l / 2), 1);
  }
  return arr;
}

/////////////////////////////////////////
function replaceMiddle(a) {
  const { length: l } = a;

  if (l % 2 === 0) {
    a.splice(l / 2 - 1, 2, a[l / 2 - 1] + a[l / 2]);
  }

  return a;
}

/////////////////////////////////////////
