// Plus Minus
// Question
// Complete the plusMinus function in the editor below. 
// It should print out the ratio of positive, negative and zero items in the array, 
// each on a separate line rounded to six decimals.

// plusMinus has the following parameter(s):

// arr: an array of integers

// Sample Input

// 6
// -4 3 -9 0 4 1  


// Sample Output

// 0.500000
// 0.333333
// 0.166667

function plusMinus(arr) {
    var result = [];
    var a1 = 0, a2 = 0, a3 = 0;
    for (var i = 0; i < arr.length; i++){
        if (arr[i] > 0) {
            a1++;
        }
        if (arr[i] < 0) {
            a2++;
        }
        if (arr[i] == 0) {
            a3++;
        }
        // console.log(a1);
    }
    result[0] = parseFloat(a1 / arr.length).toFixed(6);
    console.log(result[0]);
    // console.log(typeof result[0]);
    result[1] = parseFloat(a2 / arr.length).toFixed(6);
    console.log(result[1]);
    result[2] = parseFloat(a3 / arr.length).toFixed(6);
    console.log(result[2]);
}