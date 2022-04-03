package main

func isHappy(n int) bool {

	found := make(map[int]bool)

	var sum = 0
	for n != 1 {
		var t = n
		for t != 0 {
			sum += (t % 10) * (t % 10)
			t /= 10
		}
		n = sum
		if _, ok := found[n]; ok {
			return false
		}
		found[n] = true
		sum = 0
	}
	return true
}
