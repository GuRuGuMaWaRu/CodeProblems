function alternatingSums(a) {
  let team1 = 0,
    team2 = 0;

  a.forEach((person, index) => {
    index % 2 === 0 ? (team1 += person) : (team2 += person);
  });

  return [team1, team2];
}
