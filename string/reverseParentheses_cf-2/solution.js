function workingHorseFn(s) {
  let finalString = "";
  let openingBracket = -1;
  let bracketsToClose = 0;

  for (let i = 0, len = s.length; i < len; i++) {
    if (s[i] === "(") {
      if (bracketsToClose === 0) {
        openingBracket = i;
      }
      bracketsToClose += 1;
    } else if (s[i] === ")") {
      if (bracketsToClose === 1) {
        finalString += workingHorseFn(s.slice(openingBracket + 1, i));
      }
      bracketsToClose -= 1;
    } else if (bracketsToClose === 0) {
      finalString += s[i]
    }
  }

  return finalString.split("").reverse().join("");
}

function reverseParentheses(s) {
  let finalString = "";
  let openingBracket = -1;
  let bracketsToClose = 0;

  for (let i = 0, len = s.length; i < len; i++) {
    if (s[i] === "(") {
      if (bracketsToClose === 0) {
        openingBracket = i;
      }
      bracketsToClose += 1;
    } else if (s[i] === ")") {
      if (bracketsToClose === 1) {
        finalString += workingHorseFn(s.slice(openingBracket + 1, i));
      }
      bracketsToClose -= 1;
    } else if (bracketsToClose === 0) {
      finalString += s[i]
    }
  }

  return finalString;
}
