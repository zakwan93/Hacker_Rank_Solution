// Complete the checkMagazine function in the editor below. It must print Yes 
// if the note can be formed using the magazine, or No.

// checkMagazine has the following parameters:

// magazine: an array of strings, each a word in the magazine
// note: an array of strings, each a word in the ransom note

// The first line contains two space-separated integers, m and n, the numbers of words in the magazine and the note. 
// The second line contains m space-separated strings, each magazine[i]. 
// The third line contains n space-separated strings, each note[i].

// Sample Input 0
// 6 4
// give me one grand today night
// give one grand today

// Sample Output 0
// Yes

// Sample Input 1
// 6 5
// two times three is not four
// two times two is four

// Sample Output 1
// No

// Explanation 1
// 'two' only occurs once in the magazine.

// Sample Input 2
// 7 4
// ive got a lovely bunch of coconuts
// ive got some coconuts

// Sample Output 2
// No

// Answer
function checkMagazine(magazine, note) {
    var arr = []
    var dict = {}
    for (var i = 0; i < magazine.length; i++) {
        if (dict[magazine[i]]) {
            dict[magazine[i]] += 1;
        } else {
            dict[magazine[i]] = 1;
        }
        // console.log(dict[magazine[i]]);
    }
    for (var i = 0; i < note.length; i++) {
        if (dict[note[i]]) {
            dict[note[i]]--;
            arr.push(note[i]);
        }
        // console.log(arr);
    }
    console.log(arr.length === note.length ? 'Yes' : 'No')
}
