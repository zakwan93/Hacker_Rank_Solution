function productofarr(arr){
  let myArr = [];
  let total = 1;
  for(let i=0; i<arr.length; i++){
      total *= arr[i];
  }

  for(let i=0; i<arr.length; i++){
    if(arr[i] == 0){
        myArr.push(arr[i]);
      }

      let newvalue = total / arr[i];
      myArr.push(newvalue);
      }

  console.log(myArr);
}

console.log(productofarr([2,4,6]));