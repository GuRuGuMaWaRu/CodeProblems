function deepCalc(num) {
  return Math.floor(num / 10) + num % 10;
}

function lateRide(n) {
  if (n < 60) {
    return deepCalc(n);
  } else {
    return deepCalc(Math.floor(n / 60)) + deepCalc(n % 60);
  }
}
