// Function Description

// Complete the hurdleRace function in the editor below. 
// It should return the minimum units of potion Dan needs to drink to jump all 
// of the hurdles.

// hurdleRace has the following parameter(s):

// k: an integer denoting the height Dan can jump naturally
// height: an array of integers denoting the heights of each hurdle
// Sample Input 0
// 5 4
// 1 6 3 5 2

// Sample Output 0
// 2

// Explanation 0
// Dan's character can jump a maximum of k=4  units, 
// but the tallest hurdle has a height of h1=6:

// To be able to jump all the hurdles, Dan must drink 6 -4 = 2 doses.

// Sample Input 1
// 5 7
// 2 5 4 5 2

// Sample Output 1
// 0

// Dan's character can jump a maximum of k=7 units, 
// which is enough to cross all the hurdles:


// Because he can already jump all the hurdles, Dan needs to drink 0 doses.

// Answer

function hurdleRace(k, height) {
    let max = Math.max(...height);
    let result = max - k;
    // console.log(max);
    if (result > 0) { return result };
    if (result <= 0) { return "0" };
    console.log(result);
}