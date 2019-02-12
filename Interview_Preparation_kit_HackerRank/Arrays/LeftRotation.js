// Function Description

// Complete the function rotLeft in the editor below. It should return the 
// resulting array of integers.

// rotLeft has the following parameter(s):

// An array of integers a.
// An integer d, the number of rotations.

// Sample Input
// 5 4
// 1 2 3 4 5

// Sample Output
// 5 1 2 3 4

// Answer
function rotLeft(a, d) {
    var arr = [];
    for (var i = 0; i < a.length; i++) {
        arr.push(a[i]);
    };
    for (var j = 1; j <= d; j++) {
        arr.shift(arr.push(arr[0]));
    }
    return arr;
}