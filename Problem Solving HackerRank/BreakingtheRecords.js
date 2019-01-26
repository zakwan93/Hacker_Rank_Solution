function breakingTheRecords(scores) {
	let highets = scores[0];
	let lowest = scores[0];
	let result = [];
	let highScore = 0, lowScore = 0;

	for(let i=0; i<scores.length; i++){
		if(highets < scores[i]){
			highets = scores[i];
			highScore += 1;
		}else
		if(scores[i] < lowest){
			lowest = scores[i];
			lowScore += 1;
		}
	}

	result[0] = highScore;
	result[1] = lowScore;

	return result;
}

console.log(breakingTheRecords([3, 4, 21, 36, 10, 28, 35, 5, 24, 42]));