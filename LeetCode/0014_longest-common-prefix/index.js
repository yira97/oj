/**
 * @param {string[]} strs
 * @return {string}
 */
 var longestCommonPrefix = function(strs) {
    const min_len = strs.reduce((min,s) => min < s.length ? min : s.length, strs[0].length)
    let t = 0;
    while (t < min_len) {
        if (strs.some(s => s[t] !== strs[0][t])) break;
        t++;
    }
    return strs[0].slice(0, t);
};