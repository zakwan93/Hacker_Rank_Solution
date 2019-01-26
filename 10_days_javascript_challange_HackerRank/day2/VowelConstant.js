// Task

// Complete the vowelsAndConsonants function in the editor below. 
// It has one parameter, a string, s , consisting of lowercase English alphabetic 
// letters (i.e., a through z). The function must do the following:

// First, print each vowel in  on a new line. The English vowels are a, e, i, o, and u, and 
// each vowel must be printed in the same order as it appeared in .
// Second, print each consonant (i.e., non-vowel) in  on a new line in the same order as it appeared in .

// Input Format
// Locked stub code in the editor reads string  from stdin and passes it to the function.

// Output Format
// First, print each vowel in  on a new line (in the same order as they appeared in ). 
// Second, print each consonant (i.e., non-vowel) in  on a new line (in the same order as they appeared in ).

// Sample Input 0
// javascriptloops

// Sample Output 0

// a
// a
// i
// o
// o
// j
// v
// s
// c
// r
// p
// t
// l
// p
// s

function vowelsAndConsonants(s){
	var vowel = ['a','e','i','o','u'];
	var vowelArray = [];
	var consonantArray = [];

	for(let i=0; i<s.length; i++){
		if(vowel.indexOf(s[i]) > -1){
			vowelArray.push(s[i]);
		}else{
			consonantArray.push(s[i]);
		}
	}

	for(let i=0; i<vowelArray.length; i++){
		console.log(vowelArray[i]);
	}

	for (var i = 0; i < consonantArray.length; i++) {
		console.log(consonantArray[i]);
	}

}

console.log(vowelsAndConsonants("javascriptloops"));



