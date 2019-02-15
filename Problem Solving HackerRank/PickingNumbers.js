// Function Description

// Complete the pickingNumbers function in the editor below. 
// It should return an integer that represents the length of the longest array 
// that can be created.

// pickingNumbers has the following parameter(s):

// a: an array of integers
// Sample Input 0
// 6
// 4 6 5 3 3 1

// Sample Output 0
// 3

// Sample Input 1
// 6
// 1 2 2 3 1 2

// Sample Output 1
// 5

function pickingNumbers(a) {
	var mySet = new Set();
	var maxCount = 0;
	for(let i=0; i<a.length; i++){
		var count = 0;
		if(!mySet.has(a[i])){
			mySet.add(a[i]);
			for(let j = 0; j<a.length; j++){
				if(a[j] == a[i] || a[j] == a[i] + 1){
					count++;
				}
			}
			maxCount = Math.max(maxCount, count);
		}
	}
	return maxCount;
}