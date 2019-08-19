/*
When you recently visited your little nephew, he told you a sad story: there's a bully at school who steals his lunch every day, and locks it away in his locker. He also leaves a note with a strange, coded message. Your nephew gave you one of the notes in hope that you can decipher it for him. And you did: it looks like all the digits in it are replaced with letters and vice versa. Digit 0 is replaced with 'a', 1 is replaced with 'b' and so on, with digit 9 replaced by 'j'.

The note is different every day, so you decide to write a function that will decipher it for your nephew on an ongoing basis.

Example

For note = "you'll n4v4r 6u4ss 8t: cdja", the output should be
stolenLunch(note) = "you'll never guess it: 2390".

Input/Output

[execution time limit] 4 seconds (js)

[input] string note

A string consisting of lowercase English letters, digits, punctuation marks and whitespace characters (' ').

Guaranteed constraints:
0 ≤ note.length ≤ 500.

[output] string

The deciphered note.
*/

function stolenLunch(note) {
  const chars = "abcdefghij";
  const numbers = "0123456789";

  return note
    .split("")
    .map(char => {
      if (chars.includes(char)) {
        return char.charCodeAt(0) - 97;
      } else if (numbers.includes(char)) {
        return String.fromCharCode(+char + 97);
      }
      return char;
    })
    .join("");
}

const q1 = "you'll n4v4r 6u4ss 8t: cdja"; // "you'll never guess it: 2390"
const q2 = ""; // -
const q3 = "0123456789"; // "abcdefghij"
const q4 = "jihgfedcba"; // "9876543210"
const q5 = "you won't know!!"; // "you won't know!!"
const q6 =
  "just 63jd73 some random note jkhdf83 ds823 that you, dfj238 dsf38 little one?, will abjk38 s83    skdu3 29never get!"; // "9ust gd93hd som4 r0n3om not4 9k735id 3sicd t70t you, 359cdi 3s5di l8ttl4 on4?, w8ll 019kdi sid    sk3ud cjn4v4r 64t!"

console.log(stolenLunch(q1));
console.log(stolenLunch(q2));
console.log(stolenLunch(q3));
console.log(stolenLunch(q4));
console.log(stolenLunch(q5));
console.log(stolenLunch(q6));
