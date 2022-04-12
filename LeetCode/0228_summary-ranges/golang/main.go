package main

import "fmt"

func summaryRanges(nums []int) []string {
	res := make([]string, 0)

	// 1 2 3 4 5

	for i := 0; i < len(nums); i++ {
		for j := i; j < len(nums); j++ {
			if j == len(nums)-1 || nums[j+1]-nums[j] > 1 {
				if j == i {
					res = append(res, fmt.Sprintf("%d", nums[i]))
				} else {
					res = append(res, fmt.Sprintf("%d->%d", nums[i], nums[j]))
				}
				i = j
				break
			}
		}
	}
	return res
}
