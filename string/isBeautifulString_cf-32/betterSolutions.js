function isBeautifulString(s) {
  var all = "abcdefghijklmnopqrstuvwxyz",
    rec = {};
  for (var i = 0; i < s.length; i++) rec[s[i]] = (rec[s[i]] || 0) + 1;
  for (var i = 1; i < all.length; i++) {
    if ((rec[all[i - 1]] || 0) < (rec[all[i]] || 0)) return false;
  }
  return true;
}

///////////////////////////////////////
function isBeautifulString(inputString) {
  a = new Array(26).fill(0);
  inputString.split``.map(v => a[Buffer(v)[0] - 97]++);
  m = a[0];
  return a.every(v => m >= v && ((m = v), 1));
}

///////////////////////////////////////
var aCode = "a".charCodeAt(0);
function isBeautifulString(inputString) {
  var counts = inputString.split("").reduce((map, char) => {
    if (!map[char]) {
      map[char] = 0;
    }
    map[char]++;
    return map;
  }, {});
  return (
    Object.keys(counts).filter(key => {
      if (key == "a") {
        return false;
      } else {
        var prevKey = String.fromCharCode(key.charCodeAt(0) - 1);
        return counts[key] > (counts[prevKey] || 0);
      }
    }).length === 0
  );
}
