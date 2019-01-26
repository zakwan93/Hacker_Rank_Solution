// Task

// Complete the function in the editor below by returning a RegExp object, re , 
// that matches any string s that begins and ends with the same vowel. 
// Recall that the English vowels are a, e, i, o, and u.

// Constraints

// The length of string  s is > 3.
// String s consists of lowercase letters only (i.e., [a-z]).

// Output Format

// The function must return a RegExp object that matches any string s beginning with and ending in the same vowel.

// Sample Input 0
// bcd

// Sample Output 0
// false

// Explanation 0
// This string starts with (and ends in) a consonant, so it cannot start and end with the same vowel.

// Sample Input 1
// abcd

// Sample Output 1
// false

function regexVar(s) {
    /*
     * Declare a RegExp object variable named 're'
     * It must match a string that starts and ends with the same vowel (i.e., {a, e, i, o, u})
     */
    let re = /^([aeiou]).*\1$/;
    /*
     * Do not remove the return statement
     */
    return re;
}

// Explaination

// 1- ^ asserts position at start of the string 
// 2- 1st Capturing Group ([aeiou]) 
// 3- .* matches any character (except newline) - between zero and unlimited times, as many times as possible, giving back as needed (greedy) 
// 4- \1 matches the same text as most recently matched by the 1st capturing group 
// 5- $ asserts position at the end of the string



console.log(regexVar("absa"));

