function palindromeRearranging(inputString) {
  const strToArray = inputString.split("");
  const checkPallindrome = {};
  const oddLength = strToArray.length % 2 !== 0;
  let falsies = 0;

  strToArray.forEach(char => {
    if (
      checkPallindrome.hasOwnProperty(char) &&
      checkPallindrome[char] === false
    ) {
      checkPallindrome[char] = true;
    } else {
      checkPallindrome[char] = false;
    }
  });

  for (let char in checkPallindrome) {
    if (checkPallindrome[char] === false && oddLength && falsies === 1) {
      return false;
    } else if (checkPallindrome[char] === false && oddLength) {
      falsies += 1;
    } else if (checkPallindrome[char] === false) {
      return false;
    }
  }

  return true;
}
