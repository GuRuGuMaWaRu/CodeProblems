function lemonadePrices(prices, quantity) {
  const percent = (prices[0] - prices[1]) / prices[0];

  return quantity
    .reduce((total, current, i) => {
      if (!prices[i]) {
        calculatedPrice = +(
          prices[i - 1] -
          prices[i - 1] * (percent * i)
        ).toFixed(2);

        prices.push(calculatedPrice);

        return total + current * calculatedPrice;
      }

      return total + current * prices[i];
    }, 0)
    .toFixed(2);
}

const a1 = [10, 9.5, 8.55, 7.27];
const b1 = [10, 15, 20, 30, 40];

const a2 = [12, 11.16, 9.6, 7.58, 5.46];
const b2 = [3, 4, 3, 9, 12, 15, 20, 34];

console.log(lemonadePrices(a2, b2));
