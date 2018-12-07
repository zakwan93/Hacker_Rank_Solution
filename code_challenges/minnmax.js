// Write a functionn to find a Max number from given array without using MAX() method 

function max(arr){
  var maximum= 0;
  var length = arr.length;
  for(let i=0; i<length; i++){
    if(arr[i]>maximum){
      maximum = arr[i];
      // console.log(maximum);
    }
  }
return maximum;
}

console.log(max([10,8,20,23,13,3]))


// Write a functionn to find a Min number from given array without using MIN() method

function min(arr){
  var minimum = arr[0];
  var length = arr.length;
  for(let i=0; i<length; i++){
    if(arr[i] < minimum){
      minimum = arr[i];
    }
  }
  return minimum;
}
console.log(min([10,8,20,23,13,3]))