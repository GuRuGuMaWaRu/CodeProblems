function depositProfit(deposit, rate, threshold) {
  let finalSum = deposit;
  let years = 0;

  while (finalSum < threshold) {
    finalSum += finalSum * (rate / 100);
    years += 1;
    console.log(finalSum);
  }

  return years;
}
