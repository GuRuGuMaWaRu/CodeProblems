function depositProfit(d, r, t) {
  return Math.ceil(Math.log(t / d) / Math.log(r / 100 + 1));
}

/////////////////////////////

function depositProfit(deposit, rate, threshold) {
  var years = 0;

  while (deposit < threshold) {
    deposit *= 1 + rate / 100;
    years++;
  }

  return years;
}

/////////////////////////////

function depositProfit(deposit, rate, threshold) {
  var account = deposit;
  var numYears = 0;
  while (account < threshold) {
    numYears++;
    account *= 1 + rate / 100;
  }
  return numYears;
}
