// Given two strings, determine if they share a common substring. 
// A substring may be as small as one character.

// For example, the words "a", "and", "art" share the common substring . 
// The words "be" and "cat" do not share a substring.

// Function Description

// Complete the function twoStrings in the editor below. It should return a string, 
// either YES or NO based on whether the strings share a common substring.

// twoStrings has the following parameter(s):

// s1, s2: two strings to analyze .
// Input Format

// The first line contains a single integer p, the number of test cases.

// The following p pairs of lines are as follows:

// The first line contains string s1.
// The second line contains string s2.

// Sample Input
// 2
// hello
// world
// hi
// world

// Sample Output
// YES
// NO

// Answer

function twoStrings(s1, s2) {
	let arr = [];
	for(let v of s1){
		if(s2.includes(v)){
			arr.push(v);
		}
	}
	return (arr.length >= 1 ? "YES" : "NO");
}
