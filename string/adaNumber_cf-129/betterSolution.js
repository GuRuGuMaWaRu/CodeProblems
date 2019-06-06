const adaNumber = line => {
  line = line.replace(/_/g, ``);
  if (line.match(/^\d+$/)) return true;
  const num = line.match(/^(\d{1,2})#([0-9a-f]+)#$/i);
  return num
    ? [...num[2]].every(v => !isNaN(parseInt(v, num[1]))) &&
        num[1] >= 2 &&
        num[1] <= 16
    : false;
};
