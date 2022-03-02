/**
 * @param {string} s
 * @return {number}
 */
 var lengthOfLastWord = function(s) {
    let beg = false;
    let count = 0;
    
    for (let i = s.length - 1; i >= 0; i--) {
        if (s[i] === ' ') {
            if (!beg) continue;
            break;
        }
        if (!beg) {
            beg = true;
        }
        count++;
    }
    
    return count;
};