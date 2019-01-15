// RepeatedString
// Function Description

// Complete the repeatedString function in the editor below. 
// It should return an integer representing the number of occurrences 
// of a in the prefix of length  in the infinitely repeating string.

// repeatedString has the following parameter(s):

// s: a string to repeat
// n: the number of characters to consider
// Input Format

// The first line contains a single string, s . 
// The second line contains an integer, n .

// Sample Input 
// aba
// 10

// Sample Output 
// 7

function repeatedString(s,n){
	var i,
		count = 0,
		count1 = 0;

	if(n % s.length = 0){
		for(var i = 0; i < s.length; i++){
			if(s[i] == 'a'){
				count++;
			}
		}
		return Math.floor(n / s.length * count);
	}else{
		for(var i = 0; i < s.length; i++){
			if(s[i] == 'a'){
				count++;
				if(i < n % s.length){
					count1++;
				}
			}
		}
		return Math.floor(( n / s.length * count) + count1);
	}
}


console.log(repeatedString('abc',10));