function crosswordFormation(words) {
  const getIntersections = words => {
    const intersections = {};

    for (const mainWord of words) {
      for (const subWord of words) {
        if (mainWord === subWord) {
          continue;
        }
        for (let i = 0, len = mainWord.length; i < len; i++) {
          for (let j = 0, lenJ = subWord.length; j < lenJ; j++) {
            if (mainWord[i] === subWord[j]) {
              const mainWordIndex = words.indexOf(mainWord);
              const subWordIndex = words.indexOf(subWord);

              if (intersections.hasOwnProperty(mainWordIndex)) {
                if (intersections[mainWordIndex].hasOwnProperty(subWordIndex)) {
                  intersections[mainWordIndex][subWordIndex] = [
                    ...intersections[mainWordIndex][subWordIndex],
                    [i, j]
                  ];
                } else {
                  intersections[mainWordIndex][subWordIndex] = [[i, j]];
                }
              } else {
                intersections[mainWordIndex] = { [subWordIndex]: [[i, j]] };
              }
            }
          }
        }
      }
    }

    return intersections;
  };

  const intersections = getIntersections(words);
  const combinationSets = [
    [[0, 1], [1, 2], [2, 3], [3, 0]],
    [[0, 1], [1, 3], [3, 2], [2, 0]],
    [[0, 2], [2, 1], [1, 3], [3, 0]]
  ];

  let count = 0;
  let start = null;
  let vShift = 0;
  let hShift = 0;

  for (const combinationSet of combinationSets) {
    const zeroFirst = intersections[combinationSet[0][0]][combinationSet[0][1]];
    const firstSecond =
      intersections[combinationSet[1][0]][combinationSet[1][1]];
    const secondThird =
      intersections[combinationSet[2][0]][combinationSet[2][1]];
    const thirdZero = intersections[combinationSet[3][0]][combinationSet[3][1]];

    for (const zeroRound of zeroFirst) {
      start = zeroRound[0];
      const nextFirst = zeroRound[1];

      for (let i = 0, len = firstSecond.length; i < len; i++) {
        vShift = firstSecond[i][0] - nextFirst;

        if (Math.abs(vShift) < 2) {
          continue;
        } else {
          const nextSecond = firstSecond[i][1];

          for (let j = 0, lenJ = secondThird.length; j < lenJ; j++) {
            hShift = secondThird[j][0] - nextSecond;

            if (Math.abs(hShift) < 2) {
              continue;
            } else {
              const nextThird = secondThird[j][1];
              const zeroCoord = start + hShift;
              const thirdCoord = nextThird - vShift;

              for (let k = 0, lenK = thirdZero.length; k < lenK; k++) {
                if (
                  thirdZero[k][0] === thirdCoord &&
                  thirdZero[k][1] === zeroCoord
                ) {
                  count++;
                }
              }
            }
          }
        }
      }
    }
  }

  return count * 2;
}

const q1 = ["crossword", "square", "formation", "something"]; // 6
const q2 = ["anaesthetist", "thatch", "ethnics", "sabulous"]; // 0
const q3 = ["eternal", "texas", "chainsaw", "massacre"]; // 4
const q4 = ["africa", "america", "australia", "antarctica"]; // 62
const q5 = ["phenomenon", "remuneration", "particularly", "pronunciation"]; // 62
const q6 = ["onomatopoeia", "philosophical", "provocatively", "thesaurus"]; // 20

console.log(crosswordFormation(q1));
console.log(crosswordFormation(q2));
console.log(crosswordFormation(q3));
console.log(crosswordFormation(q4));
console.log(crosswordFormation(q5));
console.log(crosswordFormation(q6));

// crosswordFormation(q1);
