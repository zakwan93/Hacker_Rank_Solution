// Function Description

// Complete the pageCount function in the editor below. 
// It should return the minimum number of pages Brie must turn.

// pageCount has the following parameter(s):

// n: the number of pages in the book
// p: the page number to turn to


// Sample Input 0
// 6
// 2

// Sample Output 0
// 1

// Answer

function pageCount(n, p) {
    /*
     * Write your code here.
     */
    let leftSide = Math.floor(p / 2);
    // console.log(leftSide);
    let rightSide = Math.floor(n / 2) - leftSide;
    // console.log(rightstart);
    return (leftSide > rightSide ? rightSide : leftSide);
}