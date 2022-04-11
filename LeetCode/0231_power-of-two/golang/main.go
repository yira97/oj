package main

func isPowerOfTwo(n int) bool {
	if n == 1 {
		return true
	}

	v := 1
	for v < n {
		v = v << 1
		if v == n {
			return true
		}
	}
	return false
}
