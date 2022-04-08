package main

func containsDuplicate(nums []int) bool {
	dic := make(map[int]bool)

	for _, n := range nums {
		if _, ok := dic[n]; ok {
			return true
		}
		dic[n] = true
	}

	return false
}
