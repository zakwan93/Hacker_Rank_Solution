// Sample Input 0
// 4
// 5

// Sample Output 0
// 4
// 5
// 18
// 20
// Explanation 0

// Given a length of a = 4  and a width of b = 5 , the Rectangle object's perimeter 
// is 4+4+5+5 = 18  and its area 4*5 =20 is .

function Rectangle(a, b) {
    this.length = a;
    this.width = b;
    this.perimeter = 2 * (a + b);
    this.area = a * b;
}
