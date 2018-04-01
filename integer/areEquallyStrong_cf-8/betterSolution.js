function areEquallyStrong(yourLeft, yourRight, friendsLeft, friendsRight) {
  return (
    yourLeft + yourRight === friendsLeft + friendsRight &&
    (yourLeft === friendsLeft || yourLeft === friendsRight)
  );
}

function areEquallyStrong(yourLeft, yourRight, friendsLeft, friendsRight) {
  var me = [yourLeft, yourRight].sort().join("");
  var friend = [friendsLeft, friendsRight].sort().join("");

  return me === friend;
}

function areEquallyStrong(yourLeft, yourRight, friendsLeft, friendsRight) {
  return (
    Math.max(yourLeft, yourRight) === Math.max(friendsLeft, friendsRight) &&
    Math.min(yourLeft, yourRight) === Math.min(friendsLeft, friendsRight)
  );
}
