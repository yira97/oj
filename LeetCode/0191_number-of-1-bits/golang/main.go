package main

func hammingWeight(num uint32) int {
	var sum int
	var mask uint32 = 1 << 31

	for i := 0; i < 32; i++ {
		if mask&num != 0 {
			sum++
		}
		mask = mask >> 1
	}

	return sum
}

func main() {
	hammingWeight(0b00000000000000000000000000001011)
}
