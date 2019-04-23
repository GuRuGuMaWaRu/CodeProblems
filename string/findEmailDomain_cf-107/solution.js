/*
An email address such as "John.Smith@example.com" is made up of a local part ("John.Smith"), an "@" symbol, then a domain part ("example.com").

The domain name part of an email address may only consist of letters, digits, hyphens and dots. The local part, however, also allows a lot of different special characters. Here you can look at several examples of correct and incorrect email addresses.

Given a valid email address, find its domain part.

Example

For address = "prettyandsimple@example.com", the output should be
findEmailDomain(address) = "example.com";
For address = "fully-qualified-domain@codesignal.com", the output should be
findEmailDomain(address) = "codesignal.com".
Input/Output

[execution time limit] 4 seconds (js)

[input] string address

Guaranteed constraints:
10 ≤ address.length ≤ 50.

[output] string
*/

function findEmailDomain(address) {
  return address.slice(address.lastIndexOf("@") + 1);
}

const q1 = "prettyandsimple@example.com"; // example.com
const q2 = "fully-qualified-domain@codesignal.com"; // codesignal.com
const q3 = '" "@space.com'; // space.com
const q4 = "someaddress@yandex.ru"; // yandex.ru
const q5 = '" "@xample.org'; // xample.org
const q6 = '"much.more unusual"@yahoo.com'; // yahoo.com
const q7 = '"very.unusual.@.unusual.com"@usual.com'; // usual.com
const q8 = "admin@mailserver2.ru"; // mailserver2.ru
const q9 = "example-indeed@strange-example.com"; // strange-example.com
const q10 = "very.common@gmail.com"; // gmail.com

console.log(findEmailDomain(q1));
console.log(findEmailDomain(q2));
console.log(findEmailDomain(q3));
console.log(findEmailDomain(q4));
console.log(findEmailDomain(q5));
console.log(findEmailDomain(q6));
console.log(findEmailDomain(q7));
console.log(findEmailDomain(q8));
console.log(findEmailDomain(q9));
console.log(findEmailDomain(q10));
