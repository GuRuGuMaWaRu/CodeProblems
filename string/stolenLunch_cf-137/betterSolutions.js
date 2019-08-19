function stolenLunch(note) {
  return note.replace(
    /[0-9a-j]/g,
    c => "0123456789abcdefghij"["abcdefghij0123456789".indexOf(c)]
  );
}

////////////////////////////////
function stolenLunch(n) {
  return n
    .split("")
    .map(
      i =>
        96 < i.charCodeAt(0) && i.charCodeAt(0) < 107
          ? (i.charCodeAt(0) - 97).toString()
          : 47 < i.charCodeAt(0) && i.charCodeAt(0) < 58
            ? String.fromCharCode(Number(i) + 97)
            : i
    )
    .join("");
}
