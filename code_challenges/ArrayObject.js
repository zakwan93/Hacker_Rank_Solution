const users = [
  {name: 'Samir',age: 27},
  {name: 'Angela', age: 33},
  {name: 'Beatrice', age: 47}
];

//const newlist = users.filter(user => user['name'] != "Samir");
//const userWithAge = users.map(user => `${user.name} is ${user.age} years old.`);

//console.log(newlist);
//console.log(userWithAge);

// o/p should be look like this
// { Samir: 27, Angela: 33, Beatrice: 47 }  

const userObject = users.reduce((userObject, user) => {
  userObject[user.name] = user.age;
  return userObject;
},{})

console.log(userObject);