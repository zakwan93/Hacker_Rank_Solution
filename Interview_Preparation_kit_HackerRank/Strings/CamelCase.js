// Function Description

// Complete the camelcase function in the editor below.
// It must return the integer number of words in the input string.

// camelcase has the following parameter(s):

// s: the string to analyze
// Input Format

// A single line containing string s.

// Sample Input
// saveChangesInTheEditor

// Sample Output
// 5

function camelcase(s) {
  let count = 1;
  for (let i in s) {
    if (s[i] === s[i].toUpperCase()) {
      count += 1;
    }
  }
  console.log(count);
  return count;
}

camelcase("saveChangesInTheEditor"); // 5
