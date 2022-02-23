/**
 * @param {number} x
 * @return {boolean}
 */
 var isPalindrome = function(x) {
    if (x < 0) return false;
    
    const s = `${x}`
    const times = Math.floor(s.length / 2)
    for (let i = 0; i < times; i++) {
        if (s[i] !== s[s.length - 1 - i]) return false;
    }
    
    return true;
    
};