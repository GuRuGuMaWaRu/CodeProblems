function electionsWinners(votes, k) {
  max = Math.max(...votes);

  return k
    ? votes.filter(x => x + k > max).length
    : votes.filter(x => x == max).length == 1
      ? 1
      : 0;
}
