function fileNaming(names) {
  const uniqeNames = {};

  return names.map(name => {
    if (!uniqeNames[name]) {
      uniqeNames[name] = 1;
      return name;
    }

    while (uniqeNames[`${name}(${uniqeNames[name]})`]) {
      uniqeNames[name] += 1;
    }

    uniqeNames[`${name}(${uniqeNames[name]})`] = 1;
    return `${name}(${uniqeNames[name]})`;
  });
}
