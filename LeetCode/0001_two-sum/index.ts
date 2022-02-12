function twoSum(nums: number[], target: number): number[] {
    const quest = {};
    
    for (let i = 0; i < nums.length; i++) {
        const curr = nums[i];
        
        if (quest[curr] !== undefined) {
            return [i, quest[curr]]
        }
        
        quest[target - curr] = i;
    }
    return [-1,-1];
}