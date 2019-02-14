// Function Description

// Complete the equalizeArray function in the editor below. 
// It must return an integer that denotes the minimum number of deletions required.

// equalizeArray has the following parameter(s):

// arr: an array of integers

Sample Input
5
3 3 2 1 3

Sample Output
2   

// Answer
function equalizeArray(arr) {
	let numCounts = {};
	for (let i=0; i<arr.length; i++){
		let count = numCounts[arr[i]] || 0;
		numCounts[arr[i]] = count + 1;
	}

	let maxCount = 0;
	for(let value in numCounts){
		if(numCounts[value] > maxCount){
			maxCount = numCounts[value];
		}
	}
	return arr.length - maxCount;
}