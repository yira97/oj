const symbolValue = (s) => {
    switch (s) {
        case 'I': return 1;
        case 'V': return 5;
        case 'X': return 10;
        case 'L': return 50;
        case 'C': return 100;
        case 'D': return 500;
        case 'M': return 1000;
    }
    // impossible
}

/**
I
II
III
IV
V
VI
VII
VIII
IX
X
**/

/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    
    let sum = 0;
    for (let i = 0; i < s.length - 1; i++) {
        const n = symbolValue(s[i]);
        const n_next = symbolValue(s[i+1]);
        
        sum += n_next <= n ? n : -n
    }
    return sum + symbolValue(s[s.length - 1]);
};