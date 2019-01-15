// function compareTriplets(a, b) {
//     var player1 = 0;
//     var player2 = 0;
//     for (var i = 0; i < a.length; i++) {
//         for (var j = 0; j <= b.length; j++) {
//             if (a[i] > b[i]) {
//                 player1 += 1;
//             } else if (a[i] < b[i]) {
//                 player2 += 1;
//             }
//         }
//     }
// }
// ---------------------------------------------
//                 Question
// ---------------------------------------------

// Complete the function compareTriplets in the editor below. 
// It must return an array of two integers, the first being Alice's score and 
// the second being Bob's.

// compareTriplets has the following parameter(s):

// a: an array of integers representing Alice's challenge rating
// b: an array of integers representing Bob's challenge rating

// Sample Input 0
// 5 6 7
// 3 6 10

// Sample Output 0

// 1 1


// ---------------------------------------------
//                 Answer
// ---------------------------------------------

function compareTriplets(a, b) {
    var result = [];
    var aScore = 0,
        bScore = 0;

    for (var i = 0; i < a.length; i++) {
        if (a[i] > b[i]) aScore++;
        if (a[i] < b[i]) bScore++;
    }
    result[0] = aScore;
    result[1] = bScore;
    return result;
}