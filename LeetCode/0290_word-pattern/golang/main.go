package leetcode

import "strings"

func wordPattern(pattern string, s string) bool {
	words := strings.Split(s, " ")
	if len(words) != len(pattern) {
		return false
	}
	dict := make(map[rune]string)
	revDict := make(map[string]rune)

	for i, c := range pattern {
		word := words[i]
		savedWord, exist := dict[c]
		if !exist {
			if _, charExist := revDict[word]; charExist {
				return false
			}

			dict[c] = word
			revDict[word] = c
			continue
		}
		if savedWord != word {
			return false
		}
	}

	return true
}
