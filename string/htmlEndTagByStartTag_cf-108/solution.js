/*
You are implementing your own HTML editor. To make it more comfortable for developers you would like to add an auto-completion feature to it.

Given the starting HTML tag, find the appropriate end tag which your editor should propose.

If you are not familiar with HTML, consult with this note.

Example

For startTag = "<button type='button' disabled>", the output should be
htmlEndTagByStartTag(startTag) = "</button>";
For startTag = "<i>", the output should be
htmlEndTagByStartTag(startTag) = "</i>".
Input/Output

[execution time limit] 4 seconds (js)

[input] string startTag

Guaranteed constraints:
3 ≤ startTag.length ≤ 75.

[output] string
*/

function htmlEndTagByStartTag(startTag) {
  const tag = startTag.match(/(?:<)?(\w*)/)[1];
  return `</${tag}>`;
}

const q1 = "<button type='button' disabled>"; // </button>
const q2 = "<i>"; // </i>
const q3 =
  "<div id='my_area' class='data' title='This is a test for title on Div tag'>"; // </div>
const q4 = "<html>"; // </html>
const q5 = "<TABLE border='1'>"; // </TABLE>
const q6 = "<li class='test'>"; // </li>

console.log(htmlEndTagByStartTag(q1));
console.log(htmlEndTagByStartTag(q2));
console.log(htmlEndTagByStartTag(q3));
console.log(htmlEndTagByStartTag(q4));
console.log(htmlEndTagByStartTag(q5));
console.log(htmlEndTagByStartTag(q6));
