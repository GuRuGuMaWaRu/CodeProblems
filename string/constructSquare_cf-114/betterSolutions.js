function toCharCounts(arr) {
  let map = {};
  arr.forEach(char => (map[char] = (map[char] || 0) + 1));
  return Object.values(map)
    .sort()
    .join("");
}

function test(str, candidate) {
  let chars = str.split("");
  let digits = candidate.toString().split("");

  let c1 = toCharCounts(chars);
  let c2 = toCharCounts(digits);

  return c1 === c2;
}

function constructSquare(s) {
  let list = [...Array(32000)]
    .map((_, x) => x * x)
    .filter(x => `${x}`.length === s.length)
    .reverse();

  for (let candidate of list) {
    if (test(s, candidate)) {
      return candidate;
    }
  }

  return -1;
}

//////////////////////////////////
const constructSquare = s => {
  const func = (p, o = {}) => (
    [...p].forEach(v => (o[v] = -~o[v])), Object.values(o).sort().join``
  );
  for (let i = ((10 ** s.length) ** 0.5) ^ 0; i > 2; i--) {
    if (`${i ** 2}`.length === s.length && func(`${i ** 2}`) === func(s))
      return i ** 2;
  }
  return -1;
};
