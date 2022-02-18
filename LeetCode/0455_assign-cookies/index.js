/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
 var findContentChildren = function(g, s) {
    g.sort((a,b)=>a-b);
    s.sort((a,b)=>a-b);
    
    let sum = 0;
    let cookieIndex = 0;
    for (let i = 0; i < s.length; i++) {
        while(cookieIndex < s.length) {
            const ok = g[i] <= s[cookieIndex];
            cookieIndex++;
            if (ok) {
                sum++;   
                break;
            }
        }
        if (cookieIndex === s.length) break;
    }
    return sum;
};