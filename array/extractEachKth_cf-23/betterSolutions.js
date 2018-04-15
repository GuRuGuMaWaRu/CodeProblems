function extractEachKth(arr, k) {
  return arr.filter((_, i) => (i + 1) % k);
}
