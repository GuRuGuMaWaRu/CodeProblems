function reflectString(inputString) {
  return inputString
    .split("")
    .map(x => String.fromCharCode(219 - x.charCodeAt(0)))
    .join("");
}

////////////////////////////////////////////

function reflectString(inputString) {
  x = "abcdefghijklmnopqrstuvwxyz";
  return inputString.split``.map(v => x[25 - x.indexOf(v)]).join``;
}
