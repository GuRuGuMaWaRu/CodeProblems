function lineUp(commands) {
  let count = 0;
  let sameDirection = 0;

  commands.split("").forEach(command => {
    if (command === "A") {
      count += 2;
    } else {
      count += 1;
    }
    if (count % 2 === 0) {
      sameDirection++;
    }
  });

  return sameDirection;
}
