function minimalNumberOfCoins(coins, price) {
  // for(var i = coins.length-1, count = 0; i >= 0; i--){
  //     while(price >= coins[i]){
  //         price = price - coins[i]
  //         count++
  //     }
  // }

  for (var i = coins.length - 1, count = 0; i >= 0; i--) {
    count += parseInt(price / coins[i]);
    price = price % coins[i];
  }

  return count;
}
//////////////////////////////////////////////
const minimalNumberOfCoins = (coins, price) => {
  const coinsUsed = coins.reverse().map((denom, i) => {
    if (price >= denom) {
      let remainder = price % denom;
      let denomCount = (price - remainder) / denom;
      price = remainder;
      return denomCount;
    }
    return 0;
  });
  return coinsUsed.reduce((a, b) => a + b);
};
