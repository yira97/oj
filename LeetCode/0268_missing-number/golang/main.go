package leetcode

func missingNumber(nums []int) int {
	n := 0
	for i := range nums {
		n = n ^ i
		n = n ^ nums[i]
	}
	n = n ^ len(nums)

	return n
}
