// Write a function that will loop through a list of integers 
// and print the index of each element after a 3 second delay.

const arr = [10,20,30,40]

for (var i=0; i<arr.length; i++){
	// pass in the variable i so that each function 
  	// has access to the correct index
  	setTimeout(function(i_local){
  		return function(){
  			console.log('The index of this number is: ', + i_local);
  		}
  	}(i),3000);
}