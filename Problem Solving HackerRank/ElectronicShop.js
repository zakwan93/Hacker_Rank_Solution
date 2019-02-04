// Function Description

// Complete the getMoneySpent function in the editor below.
// It should return the maximum total price for the two items within Monica's budget, 
// or  if she cannot afford both items.

// getMoneySpent has the following parameter(s):

// keyboards: an array of integers representing keyboard prices
// drives: an array of integers representing drive prices
// b: the units of currency in Monica's budget

// Sample Input 0
// 10 2 3
// 3 1
// 5 2 8

// Sample Output 0
// 9

// Explanation 0
// She can buy the 2nd keyboard and the 3rd USB drive for a total cost of 8+1 =9 .


// Sample Input 1
// 5 1 1
// 4
// 5

// Sample Output 1
// -1

// Explanation 1
// There is no way to buy one keyboard and one USB drive because 4 + 5 > 5, so we print -1.

// Solution

function getMoneySpent(keyboards, drives, b) {
    let max = -1;
    for(let i=0; i<keyboards.length; i++){
        var temp =0;
        for(let j=0; j<drives.length; j++){
            if(keyboards[i] + drives[j] <= b){
                temp = keyboards[i] + drives[j];
                max = temp > max ? temp : max;
            }
        }
    }
    return max;
}
