function findEmailDomain(address) {
  return /[^@]+$/.exec(address)[0];
}

/////////////////////////////////
function findEmailDomain(address) {
  return address.replace(/.*@/, "");
}
