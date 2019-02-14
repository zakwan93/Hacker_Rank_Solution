// Function Description

// Complete the migratoryBirds function in the editor below.
//  It should return the lowest type number of the most frequently sighted bird.

// migratoryBirds has the following parameter(s):
// arr: an array of integers representing types of birds sighted

// Input Format
// The first line contains an integer denoting n, the number of birds sighted 
// and reported in the array arr. 
// The second line describes  arr as n space-separated integers representing the type numbers of each bird sighted.

// Output Format

// Print the type number of the most common bird; if two or more types of 
// birds are equally common, choose the type with the smallest ID number.

// Sample Input 0
// 6
// 1 4 4 4 5 3

// Sample Output 0
// 4

// Sample Input 1
// 11
// 1 2 3 4 5 4 3 2 1 3 4

// Sample Output 1
// 3


function migratoryBirds(arr) {
	const myObj = {};
	for(let i=0; i<arr.length; i++){
		let count = myObj[arr[i]] || 0;
		myObj[arr[i]] = count + 1;
	}

	const keys = Object.keys(myObj);
	return keys.reduce((a,b) => myObj[a] > myObj[b] || myObj[a] == myObj[b] ? a : b);
}