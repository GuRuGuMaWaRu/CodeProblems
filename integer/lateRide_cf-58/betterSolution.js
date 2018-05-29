function lateRide(n) {
  var hours = (n / 60) | 0,
    minutes = n % 60;
  return ((hours / 10) | 0) + hours % 10 + ((minutes / 10) | 0) + minutes % 10;
}
