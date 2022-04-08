package main

func containsNearbyDuplicate(nums []int, k int) bool {
	l := len(nums)
	for i := 0; i < l-1; i++ {
		for j := i + 1; j <= i+k && j < l; j++ {
			if nums[i] == nums[j] {
				return true
			}
		}
	}
	return false
}
