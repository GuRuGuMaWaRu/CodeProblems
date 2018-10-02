function isSmooth(arr) {
  l = arr.length - 1;
  return (
    arr[0] == arr[l] &&
    arr[0] == arr[Math.floor(l / 2)] + (l % 2 ? arr[Math.ceil(l / 2)] : 0)
  );
}

/////////////////////////////////////
function isSmooth(arr) {
  return (
    arr
      .slice(Math.floor((arr.length - 1) / 2), Math.floor(arr.length / 2) + 1)
      .reduce((x, y) => x + y) == arr[0] && arr[0] == arr.slice(-1)[0]
  );
}

/////////////////////////////////////
