isMAC48Address = s => /^([0-9A-F]{2}-){5}[0-9A-F]{2}$/.test(s);

//////////////////////////////////
function isMAC48Address(inputString) {
  var address = inputString.split("-");
  if (address.length !== 6) {
    return false;
  } else {
    return !address.some(x => {
      return isNaN(parseInt(x, 16)) || x.length !== 2;
    });
  }
}
