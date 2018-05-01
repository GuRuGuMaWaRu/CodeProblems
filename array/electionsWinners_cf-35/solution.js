function electionsWinners(votes, k) {
  const sortedVotes = votes.sort((v1, v2) => v2 - v1);
  const topVote = sortedVotes[0];

  return sortedVotes.reduce((total, vote, i, arr) => {
    if (i === 0) {
      if (vote + k > arr[i + 1]) {
        return (total += 1);
      }
      return total;
    } else if (vote + k > topVote) {
      return (total += 1);
    }
    return total;
  }, 0);
}
