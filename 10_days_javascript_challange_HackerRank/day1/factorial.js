// Factorial using if else loop

function fact(num) {
  if(num <= 1)
    return num;
  else{
    return (num * fact(num-1));
  }
}
console.log(fact(5));
console.log(fact(1));


// Factorial using While loop
function factorial(num){
  var result= num;
  if(num == 0 || num == 1)
    return 1;

  while(num>1){
    num--;
    result *= num
  }
  return result;
}

console.log(factorial(5));


// Factorial Using For anf If loop
function factorialize(num){
  if (num == 0 || num == 1)
    return num;
  
  for(var i = num - 1; i >= 1; i--){
    num = num * i;
  }
  return num;
}

console.log(factorialize(6));