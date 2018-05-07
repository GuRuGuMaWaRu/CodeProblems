function validTime(time) {
  var t = time.split(":");
  return t[0] < 24 && t[1] < 60;
}

/////////////////
function validTime(time) {
  "use strict";
  var p = time.split(":").map(Number);
  return p[0] >= 0 && p[0] <= 23 && p[1] >= 0 && p[1] <= 59;
}

/////////////////
function validTime(time) {
  return /([0-1][0-9]|2[0-3]):[0-5][0-9]/.test(time);
}

/////////////////
validTime = t =>
  /^\d\d:\d\d$/.test(t) && t.slice(0, 2) < 24 && t.slice(3, 5) < 60;
