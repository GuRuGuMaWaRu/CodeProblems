/*

You are given an array of integers that you want distribute between several groups. The first group should contain numbers from 1 to 104, the second should contain those from 104 + 1 to 2 * 104, ..., the 100th one should contain numbers from 99 * 104 + 1 to 106 and so on.

All the numbers will then be written down in groups to the text file in such a way that:

the groups go one after another;
each non-empty group has a header which occupies one line;
each number in a group occupies one line.
Calculate how many lines the resulting text file will have.

Example

For a = [20000, 239, 10001, 999999, 10000, 20566, 29999], the output should be
numbersGrouping(a) = 11.

The numbers can be divided into 4 groups:

239 and 10000 go to the 1st group (1 ... 104);
10001 and 20000 go to the second 2nd (104 + 1 ... 2 * 104);
20566 and 29999 go to the 3rd group (2 * 104 + 1 ... 3 * 104);
groups from 4 to 99 are empty;
999999 goes to the 100th group (99 * 104 + 1 ... 106).
Thus, there will be 4 groups (i.e. four headers) and 7 numbers, so the file will occupy 4 + 7 = 11 lines.

Input/Output

[execution time limit] 4 seconds (js)

[input] array.integer a

Guaranteed constraints:
1 ≤ a.length ≤ 105,
1 ≤ a[i] ≤ 109.

[output] integer

The number of lines needed to store the grouped numbers.

*/

function numbersGrouping(a) {}

const q1 = [20000, 239, 10001, 999999, 10000, 20566, 29999]; // 11
const q2 = [
  10000,
  20000,
  30000,
  40000,
  50000,
  60000,
  10000,
  120000,
  150000,
  200000,
  300000,
  1000000,
  10000000,
  100000000,
  10000000
]; // 28
const q3 = [10000]; // 2
const q4 = [10000, 1]; // 3
const q5 = [
  685400881,
  696804468,
  696804942,
  803902442,
  976412678,
  976414920,
  47763597,
  803900633,
  233144924,
  47764349,
  233149077,
  214990733,
  214994039,
  280528089,
  280524347,
  685401797
]; // 24
const q6 = [
  598589004,
  92986320,
  520103781,
  808743817,
  635098665,
  95244159,
  808747008,
  867017063,
  635092226,
  867013865,
  92989995,
  520100093,
  95245838,
  84897101,
  598583113,
  84893918
]; // 24
const q7 = [
  1000000000,
  999990000,
  999980000,
  999970000,
  999960000,
  999950000,
  999940000,
  999930000,
  999920000,
  999910000
]; // 20
const q8 = [
  102382103,
  21039898,
  39823,
  433,
  30928398,
  40283209,
  23234,
  342534,
  98473483,
  498398424,
  9384984,
  9839239
]; // 24

console.log(constructSquare(q1));
console.log(constructSquare(q2));
console.log(constructSquare(q3));
console.log(constructSquare(q4));
console.log(constructSquare(q5));
console.log(constructSquare(q6));
console.log(constructSquare(q7));
console.log(constructSquare(q8));
