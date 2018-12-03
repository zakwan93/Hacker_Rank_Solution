// 1 way to do it call and join multile prmises using then keyword repetadly

var calculationPromise = new Promise(function(resolve,reject){
	setTimeout(function(){
		resolve(1 + 1);
	},1000);
})

calculationPromise.then(function(value){
	// console.log("The answer is:", value);
	return value + 2;
}).then(function(finalValue){
	console.log("final answer is:", finalValue);
});

// 2. create a functions and then call promise in end

var calculationPromise2 = new Promise(function(resolve,reject){
	setTimeout(function(){
		resolve(1 + 1);
	},1000);
})

function addTwo(value){
	return value + 2;
}

function PrintFinalValue(nextValue){
	console.log("final answer is:", nextValue);
}

calculationPromise2
	.then(addTwo)
	.then(PrintFinalValue)