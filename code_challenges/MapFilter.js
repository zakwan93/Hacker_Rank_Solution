// Using the filter and map methods on the years array, 
// create an array of display strings for each year in the 21st century 
// (remember: the 21st century starts with the year "2001"). 
// Each display string should be the year followed by "A.D." 
// See the comments below to see the correct result. Store the new array 
// in the variable displayYears.

const years = [1989, 2015, 2000, 1999, 2013, 1973, 2012];
let displayYears;


// displayYears should be: ["2015 A.D.", "2013 A.D.", "2012 A.D."]
// Write your code below

displayYears = years
			   .filter(year => year > 2000)
			   .map(year => `${year} A.D.`);

console.log(displayYears);