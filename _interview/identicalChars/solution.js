/*
Create a program that will read the standard input line by line and will print lines from the input that has any character in it appearing exactly two times.
*/
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.on("line", line => {
  for (let i = 0; i < line.length; i++) {
    const charRegExp = new RegExp(line[i], "g");
    if (line.replace(charRegExp, "").length === line.length - 2) {
      console.log(line);
    }
  }
});

const findIdenticalChars = chars => {
  for (let i = 0; i < chars.length; i++) {
    const charRegExp = new RegExp(chars[i], "g");
    if (chars.replace(charRegExp, "").length === chars.length - 2) {
      return chars;
    }
  }
  return false;
};

// console.log(findIdenticalChars("asdf"));
// console.log(findIdenticalChars("fdas"));
// console.log(findIdenticalChars("asds"));
// console.log(findIdenticalChars("d fm"));
// console.log(findIdenticalChars("dfaa"));
// console.log(findIdenticalChars("aaaa"));
for (var i = 0; i < line.length; i++) {
  var charRegExp = new RegExp(line[i], "g");
  if (line.replace(charRegExp, "").length === line.length - 2) {
    System.out.println(line);
  }
}
