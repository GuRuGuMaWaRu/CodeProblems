/*

Timed Reading is an educational tool used in many schools to improve and advance reading skills. A young elementary student has just finished his very first timed reading exercise. Unfortunately he's not a very good reader yet, so whenever he encountered a word longer than maxLength, he simply skipped it and read on.

Help the teacher figure out how many words the boy has read by calculating the number of words in the text he has read, no longer than maxLength.
Formally, a word is a substring consisting of English letters, such that characters to the left of the leftmost letter and to the right of the rightmost letter are not letters.

Example

For maxLength = 4 and
text = "The Fox asked the stork, 'How is the soup?'",
the output should be
timedReading(maxLength, text) = 7.

The boy has read the following words: "The", "Fox", "the", "How", "is", "the", "soup".

Input/Output

[execution time limit] 4 seconds (js)

[input] integer maxLength

A positive integer, the maximum length of the word the boy can read.

Guaranteed constraints:
1 ≤ maxLength ≤ 10.

[input] string text

A non-empty string of English letters and punctuation marks.

Guaranteed constraints:
3 ≤ text.length ≤ 110.

[output] integer

The number of words the boy has read.

*/

function timedReading(maxLength, text) {
  return text
    .replace(/(\W+)/g, " ")
    .trim()
    .split(" ")
    .filter(word => word.length > 0 && word.length <= maxLength).length;
}

const q1 = [4, "The Fox asked the stork, 'How is the soup?'"]; // 7
const q2 = [1, "..."]; // 0
const q3 = [3, "This play was good for us."]; // 3
const q4 = [3, "Suddenly he stopped, and glanced up at the houses"]; // 5
const q5 = [
  6,
  "Zebras evolved among the Old World horses within the last four million years."
]; // 11
const q6 = [
  5,
  "Although zebra species may have overlapping ranges, they do not interbreed."
]; // 6
const q7 = [1, "Oh!"]; // 0
const q8 = [
  5,
  "Now and then, however, he is horribly thoughtless, and seems to take a real delight in giving me pain."
]; // 14

console.log(timedReading(...q1));
console.log(timedReading(...q2));
console.log(timedReading(...q3));
console.log(timedReading(...q4));
console.log(timedReading(...q5));
console.log(timedReading(...q6));
console.log(timedReading(...q7));
console.log(timedReading(...q8));
