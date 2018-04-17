function growingPlant(upSpeed, downSpeed, desiredHeight) {
  if (upSpeed >= desiredHeight) {
    return 1;
  }

  const newHeight = desiredHeight - upSpeed;
  const growth = upSpeed - downSpeed;

  return 1 + Math.ceil(newHeight / growth);
}
