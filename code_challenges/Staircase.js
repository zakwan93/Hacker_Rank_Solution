// Question  Staircase
// Function Description

// Complete the staircase function in the editor below. 
// It should print a staircase as described above.
// staircase has the following parameter(s):
// n: an integer

// Input Format
// A single integer, , denoting the size of the staircase.

// Output Format
// Print a staircase of size  using # symbols and spaces.

// Note: The last line must have  spaces in it.

// Sample Input
// 6

// Sample Output

//      #
//     ##
//    ###
//   ####
//  #####
// ######

// Answers

function staircase(n) {
	var s = '';
	for(var i =1; i <= n; i++){
		s+= ' '.repeat(n - i) + '#'.repeat(i) + '\n';
	}
	console.log(s);
}

console.log(staircase(6));

