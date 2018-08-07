function leastFactorial(n) {
  var f = 1;
  var i = 2;
  while (f < n) {
    f *= i++;
  }
  return f;
}

//////////////////////////
function leastFactorial(n) {
  var m = 1;
  var count = 2;
  while (m < n) {
    m *= count;
    count++;
  }
  return m;
}

//////////////////////////
