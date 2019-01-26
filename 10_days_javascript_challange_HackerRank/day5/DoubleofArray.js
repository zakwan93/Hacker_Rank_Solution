// Objective

// In this challenge, we practice using arrow functions. 
// Check the attached tutorial for more details.

// Task
// Complete the function in the editor. It has one parameter: an array, nums . 
// It must iterate through the array performing one of the following actions 
// on each element:

// If the element is even, multiply the element by 2 .
// If the element is odd, multiply the element by 3.
// The function must then return the modified array.

// Input Format

// The first line contains an integer, n , denoting the size of nums . 
// The second line contains n space-separated integers describing the respective 
// elements of nums.

// Return the modified array where every even element is doubled and every 
// odd element is tripled.

// Sample Input 
// 1 2 3 4 5

// Sample Output 
// 3 4 9 8 15

// Answer 

function modifyArray(nums){
	const double = nums.map((num) => {
		if(num % 2 == 0){
			return num * 2;
		}else{
			return num * 3;
		}
	});
	return double;
}

console.log(modifyArray(1 2 3 4 5));

