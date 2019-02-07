// Random Dice Generator
// Given a string with the format 'ndx', where n is the number of dice 
// and x is the number of sides of each dice write a function that parses that 
// string and creates the result

// Example 1:
//   input: '5d20' => output: {die: 5, rolls: [17, 3, 8, 1, 12]}

// the output should be an object that contains the number of dice and 
// the result of rolling those die.

// Example 2:
//   input: '3d100' =>  output: {die: 3, rolls: [23, 98, 64]}


// Answer

function rolDice(input){
  let myInput = input.split('d');
  // console.log(myInput);
  let number = parseInt(myInput[0]);
  // console.log(number);
  let rollDice  = parseInt(myInput[1]); 
  let random = []; 
  for (let i=0; i<number; i++){
    // let randomNumber = Math.random();
    let n = Math.random() * rollDice;
    let n1 = Math.ceil(n);
    random.push(n1);
  }
  console.log("dice: " + number + " rolls: [" + random +"]");
}

console.log(rolDice("10d100"));