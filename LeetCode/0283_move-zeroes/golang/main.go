package leetcode

func moveZeroes(nums []int) {
	newIdx := 0
	for _, n := range nums {
		if n != 0 {
			nums[newIdx] = n
			newIdx++
		}
	}
	for i := newIdx; i < len(nums); i++ {
		nums[i] = 0
	}
}
