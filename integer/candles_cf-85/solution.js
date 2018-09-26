function candles(candlesNumber, makeNew) {
  let totalCandles = 0;
  let stubs = 0;

  while (candlesNumber > 0) {
    totalCandles += candlesNumber;
    stubs += candlesNumber;
    candlesNumber = Math.floor(stubs / makeNew);
    stubs = stubs % makeNew;
  }

  return totalCandles;
}
