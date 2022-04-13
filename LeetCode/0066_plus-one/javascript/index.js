/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
  return (BigInt(1) + BigInt(digits.map((n) => n.toString()).join("")))
    .toString()
    .split("");
};
