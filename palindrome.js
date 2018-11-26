function palindrome(str) {

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
