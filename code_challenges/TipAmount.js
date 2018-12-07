function tipAmount(){
  var bill = prompt("Please enter the Bill total");
  var nof = prompt("Please enter the number of people");
  var tip = prompt("Please enter the tip");
  
  // var total = (bill/nof) * tip;
  var total = (bill/nof);
  var totalWithTip = total + (tip*0.1);
  console.log(totalWithTip);
  console.log(`${totalWithTip} per person`) 
}

tipAmount();
