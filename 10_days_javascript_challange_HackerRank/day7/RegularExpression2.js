
// Sample Input 1
// Mrs.Y

// Sample Output 1
// true

// Explanation 1
// This string starts with Mrs., followed by an English alphabetic letter (Y).

// Sample Input 2
// Dr#Joseph

// Sample Output 2
// false

// Explanation 2
// This string starts with Dr# instead of Dr., so it's invalid.

// Sample Input 3
// Er .Abc

// Sample Output 3
// false

// Explanation 3
// This string starts with Er but there is a space before the period (.), making the string invalid.




function regexVar() {
    /*
     * Declare a RegExp object variable named 're'
     * It must match a string that starts with 'Mr.', 'Mrs.', 'Ms.', 'Dr.', or 'Er.', 
     * followed by one or more letters.
     */
    const re = /^(Mr\.|Mrs\.|Ms\.|Dr\.|Er\.)\s?[A-Z|a-z]+$/;
    // var re = (/^(Mr\.|Dr\.|Er\.|Ms\.|Mrs\.)\s?[a-z|A-Z]+$/);
    /*
     * Do not remove the return statement
     */
    return re;
}