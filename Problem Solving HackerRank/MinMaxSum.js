// Function Description

// Complete the miniMaxSum function in the editor below. 
// It should print two space-separated integers on one line: 
// the minimum sum and the maximum sum of 4 of 5  elements.

// miniMaxSum has the following parameter(s):

// arr: an array of 5 integers
// Input Format

// A single line of five space-separated integers.

// Output Format

// Print two space-separated long integers denoting the respective minimum 
// and maximum values that can be calculated by summing exactly four of the 
// five integers. (The output can be greater than a 32 bit integer.)

// Sample Input
// 1 2 3 4 5

// Sample Output
// 10 14

// Answer

function miniMaxSum(arr) {
	arr.sort(function(a-b){
		return a-b;
	});
	let s1 = 0,
		s2 = 0;

	for(let i=0; i<arr.length-1; i++ ){
		s1 += arr[i];
		s2 += arr[i+1];
	}

	console.log(s1 + " " + s2);
}

