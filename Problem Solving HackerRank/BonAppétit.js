// Function Description

// Complete the bonAppetit function in the editor below. 
// It should print Bon Appetit if the bill is fairly split. 
// Otherwise, it should print the integer amount of money that Brian owes Anna.

// bonAppetit has the following parameter(s):

// bill: an array of integers representing the cost of each item ordered
// k: an integer representing the zero-based index of the item Anna doesn't eat
// b: the amount of money that Anna contributed to the bill.

// Sample Input 0
// 4 1
// 3 10 2 9
// 12

// Sample Output 0
// 5

// Anna didn't eat item bill[1] = 10, but she shared the rest of the items with Brian. 
// The total cost of the shared items is 3 + 2 + 9 = 14  and, split in half, the cost per person is 7.
// Brian charged her 12  for her portion of the bill. 
// We print the amount Anna was overcharged, 12 -7 = 5, on a new line.


// Sample Input 1
// 4 1
// 3 10 2 9
// 7

// Sample Output 1
// Bon Appetit

// Explanation 1 
// Anna didn't eat item bill[1] = 10, but she shared the rest of the items with Brian. 
// The total cost of the shared items is  3 + 2 + 9 = 14 and, split in half 7, 
// the cost per person is 7. Because Brian charged 7, we print Bon Appetit on a new line.


// Answer

function bonAppetit(bill, k, b) {
    let total = 0;
    for (let i = 0; i < bill.length; i++){
        if (i == k) {
            total -= bill[i];
        }
        total += bill[i];
    }
    let half = total / 2;
    if (half == b) {
        console.log("Bon Appetit")
    } else {
        console.log(b - half); 
    } 
}