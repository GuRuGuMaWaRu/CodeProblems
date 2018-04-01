function areEquallyStrong(yourLeft, yourRight, friendsLeft, friendsRight) {
  if (yourLeft === friendsLeft) {
    return yourRight === friendsRight;
  } else if (yourLeft === friendsRight) {
    return yourRight === friendsLeft;
  }
  return false;
}
