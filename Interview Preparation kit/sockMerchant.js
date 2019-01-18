// Complete the sockMerchant function in the editor below. 
// It must return an integer representing the number of matching pairs of socks 
// that are available.



function sockMerchant(n, ar) {
    
    // create my own sorting function that takes as it’s own parameters 
	// 2 numbers a and b and return their difference. 
	// Then we’ll use this function as a parameter for the array’s built in sort function
    ar.sort(function (a, b) {
        return a - b;
    });
    var counter = 0;
    for (var i = 0; i < ar.length - 1; i++) {
        if (i + 1 < ar.length && ar[i] === ar[i + 1]) {
            counter++;
            i++;
        }
    }
    
    return counter;
}





var socks = [1, 30, 2, 10, 8, 2, 10, 8, 4, 2, 1];
var socks2 = [10, 20, 20, 10, 10, 30, 50, 10, 20];
console.log(getSocksPairs(socks)); // returns 4
console.log(getSocksPairs(socks2)); // returns 3


   // if (typeof socks == 'number') {
   //      console.log(socks)
   //      return 'wrong input';