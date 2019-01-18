// Function Description

// Complete the countingValleys function in the editor below. 
// It must return an integer that denotes the number of valleys Gary traversed.

// countingValleys has the following parameter(s):

// n: the number of steps Gary takes
// s: a string describing his path

// Input Format
// The first line contains an integer n, the number of steps in Gary's hike. 
// The second line contains a single string s, of n characters that describe his path.

// Output Format
// Print a single integer that denotes the number of valleys Gary walked through during his hike.

// Sample Input
// 8
// UDDDUDUU

// Sample Output
// 1

function countingValleys(n,s){
	var currentLevel = 0;
	var valleys = 0;
	var steps = s.split('');

	for(let i=0; i<=steps.length; i++){
		if(steps[i] == "U"){
			currentLevel += 1;

			if(currentLevel == 0){
				valleys += 1;
			}
		}else{
			currentLevel --;
		}
	}
	return valleys;
}

console.log(countingValleys(8,"UDDDUDUU"));

