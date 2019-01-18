// 5
// 1
// 2
// 2
// 3
// 1
// Sample Output

// 2
// Explanation

// The array arr = [1, 2, 2, 3, 1] has a degree of 2 based on elements values 1 and 2 because each occurs two times. Our subarrays with a degree of 2 are:

// [1, 2, 2, 3, 1], which has a length of 5.
// [2, 2], which has a length of 2.
 

// Return minimum( 2, 5 ) = 2

function degreeOfArray(arr) {
    // Write your code here
    let repeat = [];
    let sort = arr.sort(); 
    console.log(sort);
    for (let i = 0; i < sort.length-1; i++){
        if (sort[i] == sort[i + 1]) {
            repeat.push(sort[i]);
        }
    }

    console.log(repeat); 
    var count = 0;
    var half_length = Math.floor(repeat.length / 2); 
    for (var i = 0; i < half_length.length - 1; i++) {
        if (half_length[i] == half_length[i + 1]) {
            count++;
        }
    }

    console.log(count);
}
