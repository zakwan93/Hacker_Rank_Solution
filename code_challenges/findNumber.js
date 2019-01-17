function findNumber(arr,k) {
	for(let i=0; i<=arr.length; i++){
		if(arr[i] === k){
			return "YES"
		}
	}
	return "NO"
}

console.log(findNumber([1,2,3,4,5,6], 12));