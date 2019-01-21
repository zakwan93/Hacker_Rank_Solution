// Task

// Complete the function in the editor. It has one parameter: an array, a , of objects. 
// Each object in the array has two integer properties denoted by x and y. 
// The function must return a count of all such objects o in array a that satisfy 
// o.x == o.y

// Input Format

// The first line contains an integer denoting nn. 
// Each of the n subsequent lines contains two space-separated integers describing 
// the values of x and y.

// Output Format

// Return a count of the total number of objects o such that o.x == o.y . 
// Locked stub code in the editor prints the returned value to STDOUT.

// Sample Input 0
// 5
// 1 1
// 2 3
// 3 3
// 3 4
// 4 5

// Sample Output 0
// 2

// Answer

function getCounts(objects){
	let count = 0;

	for(let index in objects){
		if(objects[index].x == objects[index].y){
			count++;
		}
	}
	return count;
}


