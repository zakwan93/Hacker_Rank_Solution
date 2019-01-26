// Task

// Complete the reverseString function; it has one parameter, . 
// You must perform the following actions:

// Try to reverse string  using the split, reverse, and join methods.
// If an exception is thrown, catch it and print the contents of the exception's  
// on a new line.
// Print  on a new line. If no exception was thrown, then this should be the reversed 
// ring; if an exception was thrown, this should be the original string.
// Input Format

// Locked stub code in the editor reads variable  from stdin and passes it 
// to the function.

// Output Format
// You must write two print statements using console.log():

// Print the contents of a caught exception's  on a new line. 
// If no exception was thrown, this line should not be printed.
// Print  on a new line. If no exception was thrown, 
// then this should be the reversed string; if an exception was thrown, 
// this should be the original string.

// Sample Input 0
// "1234"

// Sample Output 0
// 4321

function reverseString(s){
	try{
		s = s.split("").reverse().joinn('');
	}catch(e){
		console.log(e.message);
	}finally{
		console.log(s);
	}
}


console.log(reverseString("madam"))

