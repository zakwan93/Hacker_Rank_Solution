// Function Description

// Complete the alternatingCharacters function in the editor below. 
// It must return an integer representing the minimum number of deletions to 
// make the alternating string.

// alternatingCharacters has the following parameter(s):
// s: a string

// Input Format
// The first line contains an integer q, the number of queries. 
// The next q lines each contain a string s.

// For example, given the string s = AABAAB, remove an A at positions 0 and 3 
// to make s = ABAB in 2 deletions.

// Sample Input
// 5
// AAAA
// BBBBB
// ABABABAB
// BABABA
// AAABBB

// Sample Output
// 3
// 4
// 0
// 0
// 4



function alternatingCharacters(s) {
    let count = 0;
    // let newS = s.split('');
    // console.log(newS);
    // [...newS].forEach(c => console.log(c + 1))
    for (let i = 0; i < s.length; i++){
        // console.log(s.charAt(i + 1));
        if (s.charAt(i) === s.charAt(i + 1)) {
            count += 1;
        }
    }
    return count;
}