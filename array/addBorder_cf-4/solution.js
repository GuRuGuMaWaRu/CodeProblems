function addBorder(picture) {
  let framedPicture = [];

  picture.forEach((line, index) => {
    if (index === 0) {
      framedPicture.push("*".repeat(line.length + 2));
    }
    framedPicture.push(`*${line}*`);
    if (index === picture.length - 1) {
      framedPicture.push("*".repeat(line.length + 2));
    }
  });

  return framedPicture;
}
