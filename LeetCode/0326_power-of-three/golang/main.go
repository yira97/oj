package leetcode

func isPowerOfThree(n int) bool {
	if n <= 0 {
		return false
	}
	x := 1
	for x < n {
		x *= 3
	}

	return x == n
}
