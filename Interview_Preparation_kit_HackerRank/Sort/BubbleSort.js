// Function Description

// Complete the function countSwaps in the editor below. 
// It should print the three lines required, then return.

// countSwaps has the following parameter(s):

// a: an array of integers .

// Sample Input 0
// 3
// 1 2 3

// Sample Output 0
// Array is sorted in 0 swaps.
// First Element: 1
// Last Element: 3

// Explanation 0 
// The array is already sorted, so 0 swaps take place and we print the 
// necessary three lines of output shown above.

// Sample Input 1
// 3
// 3 2 1

// Sample Output 1
// Array is sorted in 3 swaps.
// First Element: 1
// Last Element: 3

// Answer
function countSwaps(a) {
    function swap(a, i, j) {
        let temp = a[i];
        a[i] = a[j];
        a[j] = temp;
    }
    var countSwap = 0;
    for (let i = 0; i < a.length; i++){
        for (let j = 1; j < a.length; j++){
            // console.log(a[j - 1]);
            if (a[j - 1] > a[j]) {
                countSwap++;
                swap(a, j - 1, j);
            }
        }
    }
    console.log("Array is sorted in " + countSwap + " swaps.");
    console.log("First Element: " + a[0]);
    console.log("Last Element: " + a[a.length-1]);
}