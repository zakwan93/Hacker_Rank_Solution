// 2.  FizzBuzz 

for (var x=1; x <= 100; x++) {
    var skip = 0;
    if (x % 3 == 0) {
        console.log('Fizz');
        skip = 1;
    }
    if (x % 5 == 0) {
         console.log('Buzz');
        skip = 1;
    }
    if (x % 3 == 0 && x % 5 == 0) {
         console.log('FizzBuzz');
        skip = 1;
    }
    if (!skip) {
         console.log(x);
    }
}
