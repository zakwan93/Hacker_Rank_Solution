// Complete the function kangaroo in the editor below. 
// It should return YES if they reach the same position at the same time, 
// or NO if they don't.

// kangaroo has the following parameter(s):

// x1, v1: integers, starting position and jump distance for kangaroo 1
// x2, v2: integers, starting position and jump distance for kangaroo 2

// Output Format

// Print YES if they can land on the same location at the same time; otherwise, 
// print NO.

// Note: The two kangaroos must land at the same location after making the 
// same number of jumps.

// Sample Input 0
// 0 3 4 2

// Sample Output 0
// YES

function kangaroo(x1, v1, x2, v2) {

	if(v1 < v2) return 'NO';
	if(((x2 - x1) % (v1 - v2)) == 0) return "YES"
	return "NO"
}