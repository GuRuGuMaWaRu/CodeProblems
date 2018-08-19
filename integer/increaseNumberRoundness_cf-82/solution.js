function increaseNumberRoundness(n) {
  const nToString = n.toString(10);
  const nToArray = nToString.split("").reverse();

  return !nToArray.every((num, i) => {
    if (num === "0") {
      console.log("=== 0");
      return true;
    }
    console.log("> 0");
    console.log(nToArray[i + 1] === 0 ? false : true);
    return parseInt(nToArray[i + 1], 10) === 0 ? false : true;
  });
}

console.log(increaseNumberRoundness(902200100));
