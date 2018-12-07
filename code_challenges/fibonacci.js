// create a function to find and fibonnacci
function fibonnacci(num){
  if(num<=1){
    return 1;
  }
  return fibonnacci(num-1) + fibonnacci(num-2);
}

console.log(fibonnacci(5));