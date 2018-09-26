function candles(candles, makeNew) {
  return candles + Math.floor((candles - 1) / (makeNew - 1));
}
