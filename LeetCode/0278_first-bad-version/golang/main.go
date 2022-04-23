package leetcode

func isBadVersion(version int) bool {
	//TODO
	return true
}

/**
 * Forward declaration of isBadVersion API.
 * @param   version   your guess about first bad version
 * @return 	 	      true if current version is bad
 *			          false if current version is good
 * func isBadVersion(version int) bool;
 */

func firstBadVersion(n int) int {
	// 1 2 3 4 5

	left := 1
	right := n
	res := make(map[int]bool)

	for right-left > 1 {
		mid := left + (right-left)/2

		ok, exist := res[mid]
		if !exist {
			ok = !isBadVersion(mid)
			res[mid] = ok
		}
		if ok {
			left = mid
		} else {
			right = mid

		}
	}

	if isBadVersion(left) {
		return left
	} else {
		return right
	}
}
