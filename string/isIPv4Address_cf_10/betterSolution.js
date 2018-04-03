function isIPv4Address(s) {
  var r = s.split(".");
  return (
    r.length === 4 && r.every(x => x != "" && !isNaN(x) && x >= 0 && x < 256)
  );
}

isIPv4Address = s =>
  s.split`.`.every(
    e => (++c, (e == "0" || +e) && e >= 0 && e < 256),
    (c = 0)
  ) && c == 4;
