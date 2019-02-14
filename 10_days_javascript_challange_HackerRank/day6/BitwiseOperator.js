function getMaxLessThanK(n, k) {
    let maximum = 0;
    let current = 0;
    for (let i = 1; i < n; i++) {
        for (let j = i + 1; j <= n; j++) {
            current = i & j;
            // console.log(current);
            if (current < k && current > maximum) {
                maximum = current;
            }
        }
    }
    return maximum;
}

// Sample Input 0
// 3
// 5 2
// 8 5
// 2 2

// Sample Output 0
// 1
// 4
// 0