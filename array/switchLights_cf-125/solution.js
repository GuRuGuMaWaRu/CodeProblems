/*

N candles are placed in a row, some of them are initially lit. For each candle from the 1st to the Nth the following algorithm is applied: if the observed candle is lit then states of this candle and all candles before it are changed to the opposite. Which candles will remain lit after applying the algorithm to all candles in the order they are placed in the line?

Example

For a = [1, 1, 1, 1, 1], the output should be
switchLights(a) = [0, 1, 0, 1, 0].

Check out the image below for better understanding:



For a = [0, 0], the output should be
switchLights(a) = [0, 0].

The candles are not initially lit, so their states are not altered by the algorithm.

Input/Output

[execution time limit] 4 seconds (js)

[input] array.integer a

Initial situation - array of zeros and ones of length N, 1 means that the corresponding candle is lit.

Guaranteed constraints:
2 ≤ a.length ≤ 5000.

[output] array.integer

Situation after applying the algorithm - array in the same format as input with the same length.

*/

function switchLights(a) {
  let lights = a.filter(digit => digit === 1).length;

  if (lights > 0) {
    return a.map(digit => {
      if (lights % 2 === 0) {
        if (digit === 1) {
          lights = lights - 1;
        }
        return digit;
      } else {
        if (digit === 1) {
          lights = lights - 1;
        }
        return digit === 1 ? 0 : 1;
      }
    });
  } else {
    return a;
  }
}

const q1 = [1, 1, 1, 1, 1]; // [0, 1, 0, 1, 0]
const q2 = [0, 0]; // [0, 0]
const q3 = [1, 0, 0, 1, 0, 1, 0, 1]; // [1, 1, 1, 0, 0, 1, 1, 0]
const q4 = [1, 0, 0, 0, 0, 1, 1, 1, 0, 0, 1, 0, 1]; // [1, 1, 1, 1, 1, 0, 1, 0, 0, 0, 1, 1, 0]
const q5 = [1, 1, 0, 0, 1]; // [0, 1, 1, 1, 0]
const q6 = [1, 1, 1, 0, 1, 1, 1]; // [1, 0, 1, 1, 0, 1, 0]
const q7 = [
  0,
  0,
  0,
  1,
  0,
  1,
  1,
  0,
  1,
  0,
  0,
  1,
  0,
  0,
  1,
  1,
  0,
  1,
  1,
  0,
  0,
  0,
  0,
  0,
  1,
  0,
  0,
  1,
  1,
  0,
  1,
  0,
  1,
  1,
  0,
  0,
  0,
  0,
  1,
  0,
  1,
  0,
  1,
  0,
  1,
  0,
  0,
  0,
  0,
  1,
  0,
  1,
  1,
  1,
  1,
  0,
  0,
  1,
  0,
  0,
  1,
  1,
  0,
  1,
  1,
  1,
  0,
  0,
  1,
  1,
  1,
  0,
  1,
  1,
  0,
  1,
  1,
  1,
  1,
  0,
  0,
  1,
  1,
  0,
  0,
  0,
  0,
  0,
  1,
  0,
  1,
  0,
  0,
  1,
  0,
  0,
  1,
  0,
  0,
  0,
  1,
  0,
  0,
  1,
  1,
  1,
  0,
  1,
  0,
  1,
  1,
  0,
  0,
  0,
  0,
  1,
  0,
  0,
  1,
  0,
  1,
  1,
  0,
  0,
  0,
  1,
  1,
  1,
  0,
  1,
  1,
  0,
  1,
  0,
  0,
  0,
  0,
  1,
  1,
  0,
  0,
  1,
  1,
  0,
  1,
  0,
  1,
  1,
  0,
  0,
  0,
  1,
  0,
  1,
  1,
  0,
  0,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  0,
  1,
  0,
  0,
  0,
  1,
  1,
  0,
  1,
  1,
  0,
  0,
  1,
  0,
  0,
  0,
  1,
  1,
  0,
  1,
  1,
  1,
  0,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  0,
  0,
  1,
  1,
  0,
  1,
  1,
  0,
  0,
  1,
  1,
  1,
  1,
  0,
  1,
  1,
  0,
  1,
  0,
  0,
  0,
  1,
  0,
  0,
  1,
  1,
  0,
  1,
  1,
  0,
  0,
  1,
  1,
  1,
  1,
  0,
  0,
  1,
  1,
  0,
  1,
  0,
  1,
  0,
  1,
  1,
  0,
  1,
  1,
  0,
  1,
  1,
  0,
  0,
  1,
  1,
  0,
  0,
  1,
  0,
  1,
  0,
  0,
  1,
  1,
  1,
  0,
  1,
  1,
  1,
  1,
  1,
  0,
  1,
  0,
  1,
  0,
  1,
  0,
  0,
  0,
  1,
  0,
  1,
  1,
  0,
  0,
  0,
  0,
  1,
  0,
  0,
  0,
  0,
  0,
  1,
  0,
  0,
  0,
  1,
  0,
  0,
  0,
  1,
  0,
  1,
  1,
  0,
  1,
  1,
  1,
  0,
  1,
  1,
  1,
  0,
  1,
  0,
  0,
  0,
  0,
  0,
  0,
  1,
  0,
  0,
  0,
  1,
  1,
  0,
  1
]; //
const q8 = [
  1,
  0,
  1,
  1,
  1,
  0,
  0,
  1,
  1,
  1,
  1,
  0,
  0,
  1,
  1,
  0,
  1,
  1,
  1,
  0,
  1,
  0,
  1,
  1,
  0,
  0,
  1,
  0,
  1,
  1,
  1,
  1,
  1
]; // [1, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 1, 0, 1, 1, 0, 0, 1, 0, 0, 0, 1, 1, 0, 1, 0, 1, 0]
const q9 = [0, 0, 0, 0, 0, 0]; // [0, 0, 0, 0, 0, 0]
const q10 = [1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 1, 0, 0, 1, 0, 0, 0, 1]; // [0, 1, 0, 1, 1, 1, 1, 1, 0, 1, 0, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0]

console.log(switchLights(q1));
console.log(switchLights(q2));
console.log(switchLights(q3));
console.log(switchLights(q4));
console.log(switchLights(q5));
// console.log(switchLights(q6));
// console.log(switchLights(q7));
// console.log(switchLights(q8));
// console.log(switchLights(q9));
// console.log(switchLights(q10));
