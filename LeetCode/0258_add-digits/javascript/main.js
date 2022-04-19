/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function (num) {
  do {
    num = new String(num)
      .split("")
      .map((c) => new Number(c))
      .reduce((sum, curr) => sum + curr, 0);
  } while (num > 9);

  return num;
};
