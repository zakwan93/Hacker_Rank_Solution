// Solution 1

// function birthday(s, d, m) {
//     let count = 0;
//     for (let i = 0; i < s.length; i++){
//         if (s[i] == d) {
//             count += 1;
//         }
//         if (s[i] == m) {
//             if ((s[i] + s[i + 1] == d) || (s[i] + s[i - 1] == d)) {
//                 count++;
//             }
//         }
//     }
//     return count;
// }

// Sample Input 0
// 5
// 1 2 1 3 2
// 3 2

// Sample Output 0
// 2

// Sample Input 1
// 6
// 1 1 1 1 1 1
// 3 2

// Sample Output 1
// 0

// Sample Input 2

// 1
// 4
// 4 1

// Sample Output 2
// 1

// Explanation 2
// Lily only wants to give Ron m = 1  square of chocolate with an integer 
// value of d =4 . Because the only square of chocolate in the bar satisfies 
// this constraint, we print  1 as our answer.


// Solution 2

function birthday(s, d, m) {
    let count = 0;
    for (let i = 0; i < s.length; i++){
        let total = 0;
        for (let j = i; j < i + m; j++){
            total += s[j];
        }
        if (total === d) {
            count += 1;
        }
    }
    return count;
}
