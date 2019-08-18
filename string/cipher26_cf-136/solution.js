/*
You've intercepted an encrypted message, and you are really curious about its contents. You were able to find out that the message initially contained only lowercase English letters, and was encrypted with the following cipher:

Let all letters from 'a' to 'z' correspond to the numbers from 0 to 25, respectively.
The number corresponding to the ith letter of the encrypted message is then equal to the sum of numbers corresponding to the first i letters of the initial unencrypted message modulo 26.
Now that you know how the message was encrypted, implement the algorithm to decipher it.

Example

For message = "taiaiaertkixquxjnfxxdh", the output should be
cipher26(message) = "thisisencryptedmessage".

The initial message "thisisencryptedmessage" was encrypted as follows:

letter 0: t -> 19 -> t;
letter 1: th -> (19 + 7) % 26 -> 0 -> a;
letter 2: thi -> (19 + 7 + 8) % 26 -> 8 -> i;
etc.
Input/Output

[execution time limit] 4 seconds (js)

[input] string message

An encrypted string containing only lowercase English letters.

Guaranteed constraints:
1 ≤ message.length ≤ 200.

[output] string

A decrypted message.

*/

function cipher26(message) {
  let lastChar = 0;
  let currentChar = 0;

  return message
    .split("")
    .map(char => {
      let resultChar;
      currentChar = char.charCodeAt(0) - 97;

      if (currentChar < lastChar) {
        resultChar = String.fromCharCode(26 - lastChar + currentChar + 97);
      } else if (currentChar === lastChar) {
        resultChar = "a";
      } else {
        resultChar = String.fromCharCode(currentChar - lastChar + 97);
      }

      lastChar = currentChar;
      return resultChar;
    })
    .join("");
}

const q1 = "taiaiaertkixquxjnfxxdh"; // "thisisencryptedmessage"
const q2 = "ibttlprimfymqlpgeftwu"; // "itsasecrettoeverybody"
const q3 = "ftnexvoky"; // "fourtytwo"
const q4 = "taevzhzmashvjw"; // "thereisnospoon"
const q5 = "abdgkpvcktdoanbqgxpicxtqon"; // "abcdefghijklmnopqrstuvwxyz"
const q6 = "z"; // "z"
const qq = "taia"; // this

console.log(cipher26(q1));
console.log(cipher26(q2));
console.log(cipher26(q3));
console.log(cipher26(q4));
console.log(cipher26(q5));
console.log(cipher26(q6));
console.log(cipher26(qq));
