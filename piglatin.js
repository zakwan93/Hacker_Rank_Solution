// 3. Pig Latin

function pigLatinTranslator(sentence){
  if(typeof(sentence)!=='string'){
    console.log('please you must enter a valid string. The value you entered is not a string');
    return false;
  }
  //convert the sentence to lowercase letters and split the sentence into an array of words
  var words = sentence.toLowerCase().split(" ");
  
  //create an array to hold the new pigLatin sentence
  var pigLatinSentence = [];
  
  //loop through each word in the new array and split it to an array of characters
  for(var i=0;i<words.length;i++){
    letters = words[i].split("");
    
    //extract the first element of the array, concantenate with "ay" and push it to the array of letters
    letters.push(letters.splice(0,1)+"ay");
    
    //join the letters to form a new word
    word = letters.join('');
    
    //if it is the first word of the sentence, convert the first letter to UpperCase
    if(i===0){
      word = word.slice(0,1).toUpperCase() + word.slice(1);
    }
    
    //push the newly formed words to the pigLatinSentence array
    pigLatinSentence.push(word);
  }
  
  //join the words to form a new sentence
  pigLatinSentence = pigLatinSentence.join(" ");
  return pigLatinSentence;
}
var mystr1 = pigLatinTranslator("dog cat and puppy")
console.log(mystr1)
