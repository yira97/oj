/**
 * @param {number[]} nums
 * @return {number[][]}
 */
 var subsets = function(nums) {
    // 0 0 0 0
    // 0 0 0 1 2^0 
    // 0 0 1 0 2^1
    // 0 0 1 1
    // 0 1 0 0 2^2
    let n = Math.pow(2, nums.length);
    const res = [];
    
    for (let i = 0; i < n; i++) {
        const mask = Number(i).toString(2);
        
        const r = [];
        for (let j = 0; j < mask.length; j++) {
            if (mask[mask.length - j - 1] === '1') {
                r.push(nums[j]);
            }
        }
        res.push(r)
    }
    
    return res;
};

// subsets([1,2]);

subsets([1,2, 3]);