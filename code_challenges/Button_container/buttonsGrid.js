var mybtn1 = document.getElementById('btn1');
var mybtn2 = document.getElementById('btn2');
var mybtn3 = document.getElementById('btn3');
var mybtn4 = document.getElementById('btn4');
var mybtn5 = document.getElementById('btn5');
var mybtn6 = document.getElementById('btn6');
var mybtn7 = document.getElementById('btn7');
var mybtn8 = document.getElementById('btn8');
var mybtn9 = document.getElementById('btn9');

mybtn5.addEventListener('click',function(){
	var variableNum = mybtn1.innerHTML;
	mybtn1.innerHTML = mybtn4.innerHTML;
	mybtn4.innerHTML = mybtn7.innerHTML;
	mybtn7.innerHTML = mybtn8.innerHTML;
	mybtn8.innerHTML = mybtn9.innerHTML;
	mybtn9.innerHTML = mybtn6.innerHTML;
	mybtn6.innerHTML = mybtn3.innerHTML;
	mybtn3.innerHTML = mybtn2.innerHTML
	mybtn2.innerHTML = variableNum;

});

   