function additionWithoutCarrying(param1, param2) {
  const param1Array = param1
    .toString()
    .split("")
    .reverse();
  const param2Array = param2
    .toString()
    .split("")
    .reverse();

  const length =
    param1Array.length > param2Array.length
      ? param1Array.length
      : param2Array.length;
  const result = [];

  for (let i = 0; i < length; i++) {
    result.push(
      ((parseInt(param1Array[i]) || 0) + (parseInt(param2Array[i]) || 0)) % 10
    );
  }

  return parseInt(result.reverse().join(""));
}
