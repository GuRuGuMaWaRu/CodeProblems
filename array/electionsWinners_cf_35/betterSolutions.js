function electionsWinners(votes, k) {
  var max = Math.max(...votes);
  var r = votes.filter(x => x + k > max || x === max).length;
  return k ? r : r == 1 ? 1 : 0;
}
////////////////////////////////////
