function stringsConstruction(a, b) {
  let count = 0;
  while (true) {
    for (let x of a) {
      if (b.indexOf(x) < 0) return count;
      b = b.replace(x, "");
    }
    count++;
  }
}

function stringsConstruction(a, b) {
  return Math.min(
    ...a
      .split("")
      .map(i => Math.floor((b.split(i).length - 1) / (a.split(i).length - 1)))
  );
}

const q1 = ["abc", "abccba"]; // 2
const q2 = ["hnccv", "hncvohcjhdfnhonxddcocjncchnvohchnjohcvnhjdhihsn"]; // 3
const q3 = ["abc", "def"]; // 0
const q4 = ["zzz", "zzzzzzzzzzz"]; // 3
const q5 = ["abcabcabc", "aaaaaaaaaaabbbbbbbbbbcccccccccc"]; // 3
const q6 = ["abc", "xyz"]; // 0
const q7 = ["zbc", "ydlblksdjccdddb"]; // 0
const q8 = ["abdd", "adadapqrtsmnckgljj"]; // 0
const q9 = ["abcde", "edbcaacbdebcedaadbecadbceecabddbaecabecdcdabeabcde"]; // 10
const q10 = ["abcde", "edbcaaclpebcekbadbecadbcefcabddbaecaaaaacdakrabcde"]; // 7

console.log(stringsConstruction(q1[0], q1[1]));
console.log(stringsConstruction(q2[0], q2[1]));
console.log(stringsConstruction(q3[0], q3[1]));
console.log(stringsConstruction(q4[0], q4[1]));
console.log(stringsConstruction(q5[0], q5[1]));
console.log(stringsConstruction(q6[0], q6[1]));
console.log(stringsConstruction(q7[0], q7[1]));
console.log(stringsConstruction(q8[0], q8[1]));
console.log(stringsConstruction(q9[0], q9[1]));
console.log(stringsConstruction(q10[0], q10[1]));
