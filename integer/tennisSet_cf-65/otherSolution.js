function tennisSet(score1, score2) {
  var max = Math.max(score1, score2),
    min = Math.min(score1, score2);
  return (max == 6 && min < 5) || (max == 7 && min >= 5 && min <= 6);
}
