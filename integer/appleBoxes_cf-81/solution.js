function appleBoxes(k) {
  let totalEven = 0;
  let totalUneven = 0;

  for (let i = 1; i <= k; i++) {
    if (i % 2 === 0) {
      totalEven += i * i;
    } else {
      totalUneven += i * i;
    }
  }

  return totalEven - totalUneven;
}
