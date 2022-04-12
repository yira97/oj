package main

import "fmt"

func isAnagram(s string, t string) bool {
	// 加
	dict := make(map[rune]int)
	for _, c := range s {
		if n, ok := dict[c]; ok {
			dict[c] = n + 1
		} else {
			dict[c] = 1
		}
	}

	// 减

	for _, c := range t {
		if n, ok := dict[c]; ok {
			dict[c] = n - 1
		} else {
			return false
		}
	}

	for _, n := range dict {
		if n != 0 {
			fmt.Println(n)
			return false
		}
	}

	return true
}

func main() {
	isAnagram("anagram", "nagaram")
}
