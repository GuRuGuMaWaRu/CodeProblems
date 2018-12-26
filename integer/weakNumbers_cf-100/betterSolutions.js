weakNumbers = n => {
  let count = 0;
  let m = {};
  let arr = [];

  // Find divisiors
  for (let i = 1; i <= n; i++) {
    m[i] = 0;
    for (let j = 1; j <= i; j++) {
      if (i % j === 0) m[i]++;
    }
  }

  // Find Weakness
  while (n > 0) {
    for (let l = n - 1; l > 0; l--) {
      if (m[n] < m[l]) count++;
    }
    arr.push(count);
    count = 0;
    n--;
  }

  // Find weakest and its quantity
  let weakness = Math.max(...arr);
  for (let k in arr) {
    if (weakness === arr[k]) count++;
  }
  return [weakness, count];
};
