function rounders(n) {
  let changer = 0;

  return parseInt(
    String(n)
      .split("")
      .reverse()
      .map((number, i, arr) => {
        // console.log("number:", number);
        // console.log("changer:", changer);
        let changedNumber = parseInt(number, 10) + changer;
        // console.log("changedNumber:", changedNumber);

        if (i === arr.length - 1) {
          return changedNumber;
        }

        if (changedNumber >= 5) {
          // console.log("how come?!");
          changer = 1;
        } else {
          changer = 0;
        }

        return 0;
      })
      .reverse()
      .join(""),
    10
  );
}

const tests = [15, 1234, 1445, 14, 10, 7001, 99];

console.log(rounders(tests[6]));
