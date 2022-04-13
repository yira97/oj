/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function (candidates, target) {
  const tbl = Array.from({ length: target + 1 }, (e) => new Array());
  tbl[0] = [[]];

  for (let i = 0; i <= target; i++) {
    if (tbl[i].length === 0) continue;
    for (const c of candidates) {
      if (i + c > target) continue;
      tbl[i].forEach((compo) => {
        tbl[i + c].push([...compo, c]);
      });
    }
  }

  const r = tbl[tbl.length - 1];
  r.forEach((r) => r.sort());

  const m = {};
  r.forEach((compo) => {
    m[compo.join(",")] = compo;
  });

  return Object.values(m);
};
