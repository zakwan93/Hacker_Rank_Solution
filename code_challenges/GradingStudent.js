// Function Description

// Complete the function gradingStudents in the editor below. 
// It should return an integer array consisting of rounded grades.

// gradingStudents has the following parameter(s):
// grades: an array of integers representing grades before rounding

// Input Format
// The first line contains a single integer,n , the number of students. 
// Each line i of the n subsequent lines contains a single integer, grades[i], 
// denoting student i's grade.

// Sample Input 0
// 4
// 73
// 67
// 38
// 33

// Sample Output 0
// 75
// 67
// 40
// 33

// Answer

function gradingStudent(grades){
	let result = [];
	for(let i=0; i< grades.length; i++){
		if((grades[i] >= 38) && grades[i] % 5 >2){
			result.push(Math.ceil(grades[i]/5) * 5)
		}else{
			result.push(grades[i]);
		}
	}
	console.log(result);
}