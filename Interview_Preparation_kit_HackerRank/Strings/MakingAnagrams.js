// Function Description

// Complete the makeAnagram function in the editor below. 
// It must return an integer representing the minimum total characters that 
// must be deleted to make the strings anagrams.

// makeAnagram has the following parameter(s):

// a: a string
// b: a string

// Input Format

// The first line contains a single string, a. 
// The second line contains a single string, b.

// Sample Input
// cde
// abc

// Sample Output
// 4

// Explanation
// We delete the following characters from our two strings to turn them into 
// anagrams of each other:
// Remove d and e from cde to get c.
// Remove a and b from abc to get c.
// We must delete 4 characters to make both strings anagrams, 
// so we print 4 on a new line.

// Answer

function makeAnagram(a, b) {
    let stringA = a.split('');
    let stringB = b.split('');
    let totalLetter = stringA.length + stringB.length;
    // console.log(totalLetter);
    let count = 0;
    for (let i = 0; i < stringA.length; i++){
        for (let j = 0; j < stringB.length; j++){
            if (stringA[i] == stringB[j]) {
                stringB.splice(j, 1);
                count += 1;
                break;
            }
        }
    }
    // console.log(count);
    // console.log(totalLetter);
    let anagram = totalLetter - (2 * count);
    return anagram;
    
}

