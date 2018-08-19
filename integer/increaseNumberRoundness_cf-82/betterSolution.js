function increaseNumberRoundness(n) {
  return /0[1-9]/.test(n);
}

////////////////////////////////////////
function increaseNumberRoundness(n) {
  const parts = n
    .toString()
    .split("")
    .reverse();
  let state = false;
  for (let part of parts) {
    if (part !== "0") state = true;
    else if (state && part === "0") {
      return true;
    }
  }
  return false;
}
////////////////////////////////////////
function increaseNumberRoundness(n) {
  return (
    String(n)
      .split("0")
      .filter(el => el != "").length > 1
  );
}
////////////////////////////////////////
function increaseNumberRoundness(n) {
  return ("" + n).split("0").filter(x => x != "").length - 1;
}
