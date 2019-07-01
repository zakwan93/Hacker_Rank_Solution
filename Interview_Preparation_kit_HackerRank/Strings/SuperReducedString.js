// Steve has a string of lowercase characters in range ascii[‘a’..’z’].
// He wants to reduce the string to its shortest length by doing a series of operations.
// In each operation he selects a pair of adjacent lowercase letters that match, and he deletes them.
// For instance, the string aab could be shortened to b in one operation.

// Steve’s task is to delete as many characters as possible using this method and
// print the resulting string. If the final string is empty, print Empty String

// Sample Input 0
// aaabccddd

// Sample Output 0
// abd

// Sample Input 0
// aa

// Sample Output 1
// Empty String

// Solution
function superReducedString(s) {
  let newStr = "";
  for (let i in s) {
    // console.log(s[i]);
    const cur = s[i];
    if (newStr.length > 0 && newStr[newStr.length - 1] === cur) {
      newStr = newStr.slice(0, newStr.length - 1);
    } else {
      newStr += cur;
    }
  }
  return newStr.length === 0 ? "Empty String" : newStr;
}

superReducedString("baab");
superReducedString("aaabccddd");
