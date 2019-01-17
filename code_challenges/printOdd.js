function printOdd(l, r) {
	var arr = [];
	// let l start with odd number
	var	i = Math.floor(l / 2) * 2 + 1; 

	while(i<=r){
		arr.push(i);
		i += 2;
	};
	return arr
}

