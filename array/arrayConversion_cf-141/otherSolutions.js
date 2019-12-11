arrayConversion = a => {
  let o = 0;
  let c = (n, m) => (o ? n * m : n + m);

  while (a.length > 1) {
    a = a.reduce((b, v, i) => (i % 2 && b.push(c(a[i - 1], a[i])), b), []);
    o = !o;
  }

  return a[0];
};

////////////////////////////////////////////////////
function arrayConversion(inputArray) {
  return process(inputArray, true);
}

let process = (inputArray, d) => {
  if (inputArray.length == 1) return inputArray[0];

  let out = [];
  for (let i = 0; i < inputArray.length; i += 2) {
    out.push(
      d ? inputArray[i] + inputArray[i + 1] : inputArray[i] * inputArray[i + 1]
    );
  }
  return process(out, !d);
};
