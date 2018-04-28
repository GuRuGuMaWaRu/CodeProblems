function buildPalindrome(st) {
  let checkSt = st;

  for (let i = 1; i <= st.length; i++) {
    if (checkForPalindrome(checkSt)) {
      return checkSt;
    }

    let newPart = st
      .slice(0, i)
      .split("")
      .reverse()
      .join("");

    checkSt = st + newPart;
  }

  return checkSt;
}

function checkForPalindrome(st) {
  const firstHalf = st.slice(0, Math.floor(st.length / 2));
  const secondHalf =
    st.length % 2 === 0
      ? st.slice(firstHalf.length)
      : st.slice(firstHalf.length + 1);

  return (
    firstHalf ===
    secondHalf
      .split("")
      .reverse()
      .join("")
  );
}
