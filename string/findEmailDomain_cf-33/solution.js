function findEmailDomain(address) {
  const addressParts = address.split("@");

  return addressParts.pop();
}
