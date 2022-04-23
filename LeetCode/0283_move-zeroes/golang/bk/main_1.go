func moveZeroes(nums []int) {

	for i := range nums {
		if nums[i] != 0 {
			continue
		}
		if i == len(nums)-1 {
			return
		}

		step := 1
		for nums[i+step] == 0 {
			step++
			if i+step == len(nums) {
				return
			}
		}

		nums[i] = nums[i+step]
		nums[i+step] = 0
	}

}