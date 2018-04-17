function growingPlant(upSpeed, downSpeed, desiredHeight) {
  var days = 1;
  var height = 0;
  while (height < desiredHeight) {
    height += upSpeed;
    if (height >= desiredHeight) break;
    height -= downSpeed;
    days++;
  }
  return days;
}

/////////////////////
