// Lilah has a string, s, of lowercase English letters that she repeated infinitely 
// many times.

// Given an integer, n , find and print the number of letter a's in the
//  first n letters of Lilah's infinite string.

// For example, if the string s = 'abcac' and n =10 , the substring we consider 
// is 'abcacabcac', the first 10 characters of her infinite string. 
// There are 4 occurrences of a in the substring.

// Function Description

// Complete the repeatedString function in the editor below. 
// It should return an integer representing the number of occurrences of a in 
// the prefix of length n in the infinitely repeating string.

// repeatedString has the following parameter(s):

// s: a string to repeat
// n: the number of characters to consider
// Input Format

// The first line contains a single string, s . 
// The second line contains an integer, n .


// Print a single integer denoting the number of letter a's in the first n letters of 
// he infinite string created by repeating s  infinitely many times.

// Sample Input 0
// aba
// 10

// Sample Output 0
// 7

// Explanation 0 
// The first  letters of the infinite string are abaabaabaa. 
// Because there are  a's, we print  on a new line.

// Sample Input 1
// a
// 1000000000000

// Sample Output 1
// 1000000000000

// Explanation 1 
// Because all of the first  letters of the infinite string are a, 
// we print  on a new line.


// --------------------------------------------------
// 					Answer
// --------------------------------------------------

function repeatedString(n,s){
	var repeat = Math.round(n / s.length);
	var remainders = n % s.length;
	var count = 0;

	for(let i=0; i < s.length; i++){
		if(s.charAt(i) == "a"){
			count += repeat;

			if(i <= remainders)
				count++;
		}
	}
	return count;
}

console.log(repeatedString(epsxyyflvrrrxzvnoenvpegvuonodjoxfwdmcvwctmekpsnamchznsoxaklzjgrqruyzavshfbmuhdwwmpbkwcuomqhiyvuztwvq,
549382313570))


// function repeatedString(s, n) {
//     var repeat = Math.round(n / s.length);
//     console.log(repeat);
//     var remainder = n % s.length;
//     // console.log(remainder);
//     var answer = 0;
//     for (var i = 0; i < s.length; i++) {
//         if (s.charAt(i) == 'a') {
//             answer += repeat;
//             // console.log(answer);
//             if (i < remainder)
//                 answer++;
//                 // console.log(answer);
//         }
//     }
//     // console.log(answer);
//     return answer;  
// }





















