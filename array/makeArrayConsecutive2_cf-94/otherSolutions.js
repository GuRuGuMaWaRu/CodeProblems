function makeArrayConsecutive2(sequence) {
  var min = Math.min.apply(null, sequence);
  var max = Math.max.apply(null, sequence);

  return max - min + 1 - sequence.length;
}

///////////////////////////////////////////////////
