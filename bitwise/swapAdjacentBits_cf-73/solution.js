function swapAdjacentBits(n) {
  return ((n & 0x55555555) << 1) | ((n & 0xaaaaaaaa) >> 1);
}

//=============== TESTING ========================//
function swapAdjacentBits(n) {
  // const unevenBits = n & 170;
  const evenBits = n & 0x55555555;
  // const evenBits = n & 85;
  const unevenBits = n & 0xaaaaaaaa;
  const shiftUnevenRight = unevenBits >> 1;
  const shiftEvenLeft = evenBits << 1;
  const compare = shiftUnevenRight | shiftEvenLeft;

  // return (unevenBits >> 1) | (evenBits << 1);
  return compare.toString(2);
}

const test1 = 13;
const test2 = 74;
const test3 = 122;
const test4 = 999;
const test5 = 4888;
const trouble1 = 1073741823;
const trouble2 = 83748;
const uneven = 170;
const even = 85;

console.log(swapAdjacentBits(test1));
