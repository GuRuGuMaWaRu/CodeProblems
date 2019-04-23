/*

You're a crossword fanatic, and have finally decided to try and create your own. However, you also love symmetry and good design, so you come up with a set of rules they should follow:

the crossword must contain exactly four words;
these four words should form four pairwise intersections;
all words must be written either left-to-right or top-to-bottom;
the area of the rectangle formed by empty cells inside the intersections isn't equal to zero.
Given 4 words, find the number of ways to make a crossword following the above-described rules. Note that two crosswords which differ by rotation are considered different.

*/

function crosswordFormation(words) {
  const combinationSets = [
    [[0, 1], [1, 2], [2, 3], [3, 0]],
    [[0, 1], [1, 3], [3, 2], [2, 0]],
    [[0, 2], [2, 1], [1, 3], [3, 0]]
  ];

  let count = 0;
  let start = null;
  let vShift = 0;
  let hShift = 0;

  // 1: iterate through all combination sets
  for (const combinationSet of combinationSets) {
    const wordZero = words[combinationSet[0][0]];
    const wordFirst = words[combinationSet[0][1]];
    const wordSecond = words[combinationSet[1][1]];
    const wordThird = words[combinationSet[2][1]];
    const zeroLen = wordZero.length;
    const firstLen = wordFirst.length;
    const secondLen = wordSecond.length;
    const thirdLen = wordThird.length;

    // 2: iterate through zero word chars
    for (let z = 0; z < zeroLen; z++) {
      // 3: compare zero word chars with first word chars
      for (let f1 = 0; f1 < firstLen; f1++) {
        // 4: go further only if Z char matches F1 char
        if (wordZero[z] === wordFirst[f1]) {
          start = z;
          const nextFirst = f1;

          // 5: second iteration through first word
          for (let f2 = 0; f2 < firstLen; f2++) {
            if (f2 === f1 || f2 === f1 - 1 || f2 === f1 + 1) {
              continue;
            }

            // 6: compare first word chars with second word chars
            for (let s1 = 0; s1 < secondLen; s1++) {
              // 7: go further only if F2 char matches S1 char
              if (wordFirst[f2] === wordSecond[s1]) {
                const nextSecond = s1;
                vShift = f2 - nextFirst;

                // 8: second iteration through second word
                for (let s2 = 0; s2 < secondLen; s2++) {
                  if (s2 === s1 || s2 === s1 - 1 || s2 === s1 + 1) {
                    continue;
                  }

                  // 9: compare second word chars with third word chars
                  for (let t1 = 0; t1 < thirdLen; t1++) {
                    // 10: go further only if S2 char matches T1 char
                    if (wordSecond[s2] === wordThird[t1]) {
                      const nextThird = t1;
                      hShift = s2 - nextSecond;

                      if (
                        wordThird[nextThird - vShift] &&
                        wordZero[start + hShift] ===
                          wordThird[nextThird - vShift]
                      ) {
                        count++;
                        // console.log("start:", start);
                        // console.log("nextFirst:", nextFirst);
                        // console.log("nextSecond:", nextSecond);
                        // console.log("nextThird:", nextThird);
                        // console.log("wordZero:", wordZero);
                        // console.log("z:", z);
                        // console.log("wordFirst:", wordFirst);
                        // console.log("f1:", f1);
                        // console.log("f2:", f2);
                        // console.log("wordSecond:", wordSecond);
                        // console.log("s1:", s1);
                        // console.log("s2:", s2);
                        // console.log("wordThird:", wordThird);
                        // console.log("t1:", t1);
                        // console.log("hShift:", hShift);
                        // console.log("vShift:", vShift);
                        // console.log(
                        //   "wordZero[start - hShift]:",
                        //   wordZero[start + hShift]
                        // );
                        // console.log(
                        //   "wordThird[nextThird - vShift]:",
                        //   wordThird[nextThird - vShift]
                        // );
                        // console.log("Found!");
                      }
                    }
                  }
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
