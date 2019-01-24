// Function Description

// Complete the function birthdayCakeCandles in the editor below. 
// It must return an integer representing the number of candles she can blow out.

// birthdayCakeCandles has the following parameter(s):

// ar: an array of integers representing candle heights
// Input Format

// The first line contains a single integer, n, denoting the number of candles
// on the cake. 
// The second line contains n space-separated integers, where each 
// integer i describes the height of candle i.


// Sample Input 0
// 4
// 3 2 1 3

// Sample Output 0
// 2

// because max number in input is 3 and it's repeating twice

// Answer

function birthdayCakeCandles(ar) {
	var maximum = 0;
	var length = ar.length;

	for(let i=0 ; i<length; i++){
		if(ar[i] > maximum){
			maximum = ar[i];
		}
	}

	// console.log(maximum);

	var count = ar.filter(function(number){
		return number == maximum;
	});

	let answer = count.length;
	return answer;

}
