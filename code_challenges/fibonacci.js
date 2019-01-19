
// Simple Solution
function fibonacci(num){
  var a = 1, b = 0, temp;

  while (num >= 0){
    temp = a;
    a = a + b;
    b = temp;
    num--;
  }

  return b;
}

// While loop

// Time complexity: O(N)
// Space complexity: Constant



// create a function to find and fibonnacci

// Recursive Solution
function fibonnacci(num){
  if(num<=1){
    return 1;
  }
  return fibonnacci(num-1) + fibonnacci(num-2);
}

// Recursion

// Time complexity: O(2^N)
// Space complexity: O(n)


console.log(fibonnacci(5));



// Memoization
// Finally, and following the recursive approach we will use memoization to 
// improve our efficiency, but first of all, what’s memoization? as Wikipedia says:

// Is an optimization technique used primarily to speed up computer programs 
// by storing the results of expensive function calls.


// What does that means and why should we take care about that in our implementation?
// Basically, if we just store the value of each index in a hash, 
// we will avoid the computational time of that value for the next N times.

// This change will increase the space complexity of our new algorithm to O(n)
//  but will dramatically decrease the time complexity to 2N which will resolve to 
//  linear time since 2 is a constant.


function fibonacci(n) {
    var memo = {};

    if (memo[n]) return memo[n];

    if (n == 1 || n == 0) {
        return n;
    }

    return fibonacci(n - 1,memo) + fibonacci(n - 2,memo);

}

// Memoization

// Time complexity: O(2N)
// Space complexity: O(n)
