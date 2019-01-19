// Return the value of the second largest number in the  array.

// Sample Input 0
// 5
// 2 3 6 6 5

// Sample Output 0
// 5

function getSecondLargest(nums) {
	let sorted = nums.sort(function(a,b){
		return a-b;
	});

	let uniqArr = [];

	sorted.forEach(function(element){
		if(uniqArr.indexOf(element) == -1){
			uniqArr.push(element);
		}
	});

	return uniqArr[uniqArr.length - 2];
}

