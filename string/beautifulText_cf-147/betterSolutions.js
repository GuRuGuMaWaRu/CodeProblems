/*
 * The Problem:
 * Given a range of text width, between 'l' and 'r', see if its possible
 * to take the inputString, and by only replacing whitespace with \n
 * (new line characters), we achieve a string that is exactly the
 * width (between 'l' and 'r') on every line.
 *
 * Input: String, range (between l and r inclusive)
 * Output: Boolean
 *
 * Strategy:
 * 1) We just need a loop that starts by looking for whitespace at every
 *    potential width between l and r
 *    - if it finds it, return true.  if we get through r without finding it
 *      return false
 */

function beautifulText(inputString, l, r) {
  for (let i = l; i <= r; i++) {
    let regex = new RegExp('^(.{' + i + '}\\s)+.{' + i + '}$');
    if (regex.test(inputString)) return true;
  }
  return false;
}
