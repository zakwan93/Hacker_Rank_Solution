// Louise joined a social networking site to stay in touch with her friends.
// The signup page required her to input a name and a password. However,
// the password must be strong. The website considers a password to be strong
// if it satisfies the following criteria:

// Its length is at least .
// It contains at least one digit.
// It contains at least one lowercase English character.
// It contains at least one uppercase English character.
// It contains at least one special character. The special characters are: !@#$%^&*()-+
// She typed a random string of length  in the password field but wasn't sure if it was strong.
// Given the string she typed, can you find the minimum number of characters she must add
// to make her password strong?

// Note: Here's the set of types of characters in a form you can paste in your solution:

// numbers = "0123456789"
// lower_case = "abcdefghijklmnopqrstuvwxyz"
// upper_case = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
// special_characters = "!@#$%^&*()-+"

// Sample Input 0

// 3
// Ab1
// Sample Output 0

// 3
// Explanation 0

// She can make the password strong by adding  characters, for example, $hk,
// turning the password into Ab1$hk which is strong.

//  characters aren't enough since the length must be at least .

// Sample Input 1

// 11
// #HackerRank
// Sample Output 1

// 1
// Explanation 1

// The password isn't strong, but she can make it strong by adding a single digit.

function minimumNumber(n, password) {
  // Return the minimum number of characters to make the password strong
  let count = 0;

  if (password.match(/[0-9]/)) {
    count += 1;
  }

  if (password.match(/[a-z]/)) {
    count += 1;
  }

  if (password.match(/[A-Z]/)) {
    count += 1;
  }
  // !@#$ %^&* () - +
  if (password.match(/[\!@#\$%^&\*\(\)\-\+]/)) {
    count += 1;
  }

  return Math.max(4 - count, 6 - n);
}
