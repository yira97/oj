package main

func isIsomorphic(s string, t string) bool {
	trans := make(map[byte]byte)
	invTrans := make(map[byte]byte)

	for i, _ := range s {
		if inT, ok := trans[s[i]]; ok {
			if inT != t[i] {
				return false
			}
		} else {
			if _, ok := invTrans[t[i]]; ok {
				return false
			}

			trans[s[i]] = t[i]
			invTrans[t[i]] = s[i]
		}
	}
	return true
}
