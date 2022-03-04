/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function (a, b) {
  let r = "";
  const len = Math.max(a.length, b.length);

  let inc = 0;
  for (let i = 0; i < len; i++) {
    let va = 0;
    if (a.length - 1 - i >= 0 && a[a.length - 1 - i] === "1") {
      va = 1;
    }
    let vb = 0;
    if (b.length - 1 - i >= 0 && b[b.length - 1 - i] === "1") {
      vb = 1;
    }

    let sum = va + vb + inc;
    inc = 0;

    switch (sum) {
      case 2:
        inc = 1;
      case 0:
        r = "0" + r;
        break;
      case 3:
        inc = 1;
      case 1:
        r = "1" + r;
        break;
    }
  }
  if (inc === 1) {
    r = "1" + r;
  }

  return r;
};
