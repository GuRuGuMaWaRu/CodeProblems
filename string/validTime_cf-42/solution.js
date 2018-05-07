function validTime(time) {
  return time.split(":").every((time, i) => {
    if (i === 0) {
      return time >= 0 && time < 24;
    }
    return time >= 0 && time < 60;
  });
}
