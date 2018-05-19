function zigzag(a) {
  let maxStreak = 0;
  let currStreak = 0;

  a.forEach((num, i, arr) => {
    currStreak += 1;

    if (num === arr[i + 1] || arr[i + 1] === undefined) {
      maxStreak = maxStreak > currStreak ? maxStreak : currStreak;
      currStreak = 0;
    } else if (
      !(num > arr[i - 1] && num > arr[i + 1]) &&
      !(num < arr[i - 1] && num < arr[i + 1])
    ) {
      maxStreak = maxStreak > currStreak ? maxStreak : currStreak;
      currStreak = 1;
    }
  });

  return maxStreak;
}
