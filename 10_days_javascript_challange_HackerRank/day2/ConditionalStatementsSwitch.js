function getLetter(s) {
    let letter;
    // Write your code here
    var mySet1 = new Set(['a', 'e', 'i', 'o', 'u']);
    var mySet2 = new Set(['b', 'c', 'd', 'f', 'g']);
    var mySet3 = new Set(['h', 'j', 'k', 'l', 'm']);
    switch (true) {
        case 'aeiou'.includes(s[0]):
            letter = "A"
            break;
        case 'bcdfg'.includes(s[0]):
            letter = "B"
            break;
        case 'hjklm'.includes(s[0]):
            letter = "C"
            break;
        case 'npqrstvwxyz'.includes(s[0]):
            letter = "D"
            break;
        default:
            console.log("E")
    }
    return letter;
}