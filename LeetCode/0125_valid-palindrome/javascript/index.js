// "A" "Z" "a" "z"
const isAlphabet = (s) => (s >= "A" && s <= "Z") || (s >= "a" && s <= "z");
const isNumber = (s) => s >= "0" && s <= "9";
const isAlphaNumeric = (s) => isAlphabet(s) || isNumber(s);

/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  s = s.toLowerCase();
  const forward = Array.from(s).filter(isAlphaNumeric);

  // len:2 ->  i < 1 ok
  // len:3 ->  i < 1 ok
  const len = forward.length;
  for (let i = 0; i < len >> 1; i++) {
    if (forward[i] !== forward[len - 1 - i]) return false;
  }
  return true;
};
