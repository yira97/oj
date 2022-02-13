
const numTreesImpl = (left, right, memo={}) => {
    const count = right - left + 1;
    
    if (memo[count] !== undefined) return memo[count];
    if (left === right) return 1;
    
    let sum = 0;
    for (let i = left; i <= right; i++) {
        let lSum = 1;
        if (left < i) {
            lSum = numTreesImpl(left, i - 1, memo);
        }
        let rSum = 1;
        if (right > i) {
            rSum = numTreesImpl(i + 1, right, memo);
        }
        sum += lSum * rSum;
    }
    memo[count] = sum;
    return sum;
}

/**
 * @param {number} n
 * @return {number}
 */
var numTrees = function(n) {
    return numTreesImpl(1, n);
};


