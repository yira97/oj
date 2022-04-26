package leetcode

func canWinNim_1(n int) bool {
	// TABLE
	// 1 | 0 _ _ | T     | T
	// 2 | 1 0 _ | F T   | T
	// 3 | 2 1 0 | F F T | T
	// 4 | 3 2 1 | F F F | F
	// 5 | 4 3 2 | T F F | T
	// 6 | 5 4 3 | F T F | T
	// 7 | 6 5 4 | F F T | T
	// 8 | 7 6 5 | F F F | F
	// 9 | 8 7 6 | T F F | T
	//10 | 9 8 7 | F T F | T
	// ...
	if n < 4 {
		return true
	}
	winTable := make(map[int]bool)

	winTable[1] = true
	winTable[2] = true
	winTable[3] = true

	for i := 4; i <= n; i++ {
		if !winTable[i-1] || !winTable[i-2] || !winTable[i-3] {
			winTable[i] = true
		} else {
			winTable[i] = false
		}
	}

	return winTable[n]
}
