/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  const stack = [];

  for (const c of s) {
    if (["(", "[", "{"].includes(c)) {
      stack.push(c);
      continue;
    }
    const top = stack.pop();
    if (
      (c === ")" && top === "(") ||
      (c === "]" && top === "[") ||
      (c === "}" && top === "{")
    ) {
      continue;
    }
    return false;
  }
  if (stack.length !== 0) {
    return false;
  }

  return true;
};
