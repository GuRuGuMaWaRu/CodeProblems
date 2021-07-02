/*
Some people run along a straight line in the same direction. They start simultaneously at pairwise distinct positions and run with constant speed (which may differ from person to person).

If two or more people are at the same point at some moment we call that a meeting. The number of people gathered at the same point is called meeting cardinality.

For the given starting positions and speeds of runners find the maximum meeting cardinality assuming that people run infinitely long. If there will be no meetings, return -1 instead

*/

function runnersMeetings(startPosition, speed) {}

const q1 = [
  [1, 4, 2],
  [27, 18, 24]
]; // 3
const q2 = [
  [1, 4, 2],
  [5, 6, 2]
]; // 2
const q3 = [
  [1, 2, 3],
  [1, 1, 1]
]; // -1
const q4 = [
  [1, 1000],
  [23, 22]
]; // 2
const q5 = [
  [-2, 0, 2, 4],
  [6, 5, 4, 3]
]; // 4
const q6 = [
  [-2, 0, 2, 4],
  [6, 5, 4, 2]
]; // 3

console.log('q1:', runnersMeetings(...q1));
console.log('q2:', runnersMeetings(...q2));
console.log('q3:', runnersMeetings(...q3));
console.log('q4:', runnersMeetings(...q4));
console.log('q5:', runnersMeetings(...q5));
console.log('q6:', runnersMeetings(...q6));
