package main

func countBits(n int) []int {
    res := make([]int, 0)
    
    for i := 0; i <= n; i++ {
        // 奇数比偶数多一个1
        if (i % 2 != 0) {
            res = append(res, res[i-1] + 1)
            continue
        }
        
        s := fmt.Sprintf("%b", i)
        count := 0
        for _, c := range s {
            if c == '1' {
                count++
            }
        }
        res = append(res, count)
    }
    
    return res
}