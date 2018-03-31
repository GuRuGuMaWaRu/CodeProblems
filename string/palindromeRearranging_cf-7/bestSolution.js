function palindromeRearranging(inputString) {
  return (
    inputString
      .split("")
      .sort()
      .join("")
      .replace(/(\w)\1/g, "").length < 2
  );
}

palindromeRearranging = s => {
  //histogram the characters
  m = [];
  for (c of s) m[c] = -~m[c];
  //count the unmatched characters
  u = 0;
  for (x in m) u += m[x] % 2;

  //confirm that the number of unmatched characters
  //is the same as the oddness of the string
  return u == s.length % 2;
};

function palindromeRearranging(inputString) {
  var chars = inputString.split("").sort();
  var charNums = {};

  for (var i = 0; i < chars.length; i++) {
    if (!charNums[chars[i]]) {
      charNums[chars[i]] = 1;
    } else {
      charNums[chars[i]]++;
    }
  }

  var oddCounts = 0;

  for (var letter in charNums) {
    if (charNums[letter] % 2 != 0) {
      oddCounts++;
    }
  }

  return oddCounts < 2 ? true : false;
}
