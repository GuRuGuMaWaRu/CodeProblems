function findEmailDomain(address) {
  return address.split("@").pop();
}

/////////////////////////////////////////
function findEmailDomain(address) {
  return address.match(/@(\w+.\w+)/)[1];
}
