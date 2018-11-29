function palindrome(str) {

// The / Is the beginning of a regex (regular expression). 
// The \w looks for all word characters in a string. 
// A word character is a character from a-z, A-Z, 0-9, including the _ (underscore) 
// character. Now the \S is any character that is NOT a whitespace character. 
// You were confusing it with \s(lowercase) which is for whitespace characters. 
// The * is a character that says to look for n zero or more times, 
// where n is the metacharacter(the backslash tokens in the regex) in the regex.


// remove all non-alphanumeric character and _ 
var alphanumeric = str.replace(/[\W_]/g,'');

// make all letters lowerCase
  var lowerCase = str.toLowerCase();
  
// turn into an array
  var array = lowerCase.split('');

//use reverse() to make a reversed version of the array & use join() to turn it back into a string 
  var reversed = array.reverse().join("");
  
/* use reverse and join methods to return to original way round and back to a string. Note the neater version below where the inclusion of .split('') before reverse() and join("") doesn't seem to reverse the original array.
*/
  var string = array.reverse().join("");
  
  if (string === reversed) {
    return true;
  }
  else {
    return false;
    }
}

console.log(palindrome("A man, 7 plan, a canal. Panama"));
console.log(palindrome("MADAM"));
