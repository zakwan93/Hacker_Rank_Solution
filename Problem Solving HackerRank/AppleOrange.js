// Sample Input 0
// 7 11
// 5 15
// 3 2
// -2 2 1
// 5 -6

// Sample Output 0
// 1
// 1

// Explanation 0
// The first apple falls at position 5 -2 = 3. 
// The second apple falls at position 5 + 2 = 7. 
// The third apple falls at position 5 + 1 = 6. 
// The first orange falls at position 15 + 5 = 20. 
// The second orange falls at position 15 - 6 = 9. 
// Only one fruit (the second apple) falls within the region between 7 and 11, 
// so we print  1 as our first line of output. 
// Only the second orange falls within the region between 7 and 11, 
// so we print 1 as our second line of output.



function countApplesAndOranges(s, t, a, b, apples, oranges) {
    let appleArr = [];
    let orangeArr = [];
    let appleCount = 0, 
        orangeCount = 0;

    for (let i = 0; i < apples.length; i++){
        appleArr.push(a + apples[i]);
    }
    for (let i = 0; i < oranges.length; i++) {
        orangeArr.push(b + oranges[i]);
    }
    for (let i = 0; i < appleArr.length; i++){
        if (appleArr[i] >= s && appleArr[i] <= t) {
            appleCount += 1;
        }
    }
    for (let i = 0; i < orangeArr.length; i++) {
        if (orangeArr[i] >= s && orangeArr[i] <= t) {
            orangeCount += 1;
        }
    }
    console.log(appleCount);
    console.log(orangeCount);
}
