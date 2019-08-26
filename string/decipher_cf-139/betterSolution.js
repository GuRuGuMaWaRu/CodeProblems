function decipher(cipher) {
  return String.fromCharCode(...cipher.match(/1..|../g));
}
