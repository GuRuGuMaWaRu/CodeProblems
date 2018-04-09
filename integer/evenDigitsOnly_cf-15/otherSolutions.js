function evenDigitsOnly(n) {
  return (n + "").split("").every(x => x % 2 === 0);
}

//////////////////////////////

function evenDigitsOnly(n) {
  return !(n + "").match(/[13579]/);
}

//////////////////////////////

function evenDigitsOnly(n) {
  while (n > 0) {
    if ((n % 10) % 2 == 1) {
      return false;
    }
    n = Math.floor(n / 10);
  }
  return true;
}

//////////////////////////////
