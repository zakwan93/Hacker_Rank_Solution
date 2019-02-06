const names = ['Gary', 'Pasan', 'Gabe', 'Treasure', 'Gengis', 'Gladys', 'Tony'];

const startWithG = names.reduce((count,name) => { 
 if(name[0] == "G"){
   return count+1;
 }
 
 return count;
},0);

console.log(startWithG);

const phoneNumbers = ["(503) 123-4567", "(646) 123-4567", "(503) 987-6543", "(503) 234-5678", "(212) 123-4567", "(416) 123-4567"];
let numberOf503;

// numberOf503 should be: 3
// Write your code below

numberOf503 = phoneNumbers.reduce((count,number) => {
//  console.log(number.substring(0,5));
	if(number.substring(0,5) === "(503)"){
    return count + 1;
  }
  return count;
},0)

console.log(numberOf503);