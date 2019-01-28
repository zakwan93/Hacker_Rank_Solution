// Complete the divisibleSumPairs function in the editor below. 
// It should return the integer count of pairs meeting the criteria.

// divisibleSumPairs has the following parameter(s):

// n: the integer length of array ar
// ar: an array of integers
// k: the integer to divide the pair sum by

// Sample Input
// 6 3
// 1 3 2 6 1 2

// Sample Output
// 5

// Annswer

function divisibleSumPairs(n, k, ar) {
    let count = 0;
    for (let i = 0; i < ar.length; i++) {
        // console.log(ar[i]);
        let total = 0;
        for (let j = i + 1; j < n; j++) {
            // console.log(ar[j]);
            // console.log(ar[i]);
            let sum = ar[i] + ar[j];
            // console.log(sum);
            if ((sum == k) || (sum % k == 0)){
                count += 1;
                console.log(sum);
            }
        }
    }
    return count;
}