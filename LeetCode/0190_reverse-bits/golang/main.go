package main

func reverseBits(num uint32) uint32 {
	// 111001
	// 100111

	// (11100) => 1 => (1)
	// (1110) => 0 => (10)
	// (111) => 0 => (100)

	var remain uint32
	var reversed uint32
	for i := 0; i < 32; i++ {
		remain = num % 2
		reversed = reversed << 1
		reversed = reversed + remain
		num = num >> 1
	}
	return reversed
}

func main() {
	reverseBits(0b00000000000000000000000000000001)
}
