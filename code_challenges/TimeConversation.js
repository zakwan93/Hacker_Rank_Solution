// Function Description

// Complete the timeConversion function in the editor below. 
// It should return a new string representing the input time in 24 hour format.

// timeConversion has the following parameter(s):
// s: a string representing time in 12 hour format

// Sample Input 0
// 07:05:45PM

// Sample Output 0
// 19:05:45

// Annswer

function timeConversion(s) {
	var PM = s.match("PM") ? true : false;
	s = s.split(':');
	var min = s[1];

	if(PM){
		var hour = 12 + parseInt(s[0]);
		var sec = s[2].replace("PM",'');
	}else{
		var hour = s[0];
		var sec = s[2].replace("AM",'');
	}

	return (hour + ":" + min + ":" + sec);
}


// function timeConversion(s) {
// 	const arr = s.slice(0, 8).split(':');
// 	    // PM case
// 	    if (arr[0] == 12) { 
// 	        arr[0] = '12';
// 	    } else {
// 	        arr[0] = Number(arr[0]) + 12; 
// 	    }

// 	    // AM case
// 	    if (arr[0] == 12) {
// 	        arr[0] = '00';
// 	    }

// 	    return arr.join(':');

// }



  // const arr = s.slice(0, 8).split(':');
  //   arr[0] = (s.indexOf('PM') > -1) ?
  //       (arr[0] == 12 ? '12' : Number(arr[0]) + 12) :
  //       (arr[0] == 12 ? '00' : arr[0]);
  //   return arr.join(':');