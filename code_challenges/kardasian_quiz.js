function ask(question, answer){
  for (i = 0; i < questions.length; i++) {
    let start = prompt(questions[i]);
    if (start === answers[i]) {
      points += 1;
    }
    alert(`Your score is ${points}`)
  }
  alert(`Final Score: ${points} points!
That means you are ${kardashians[points]}`)
}

var points = 0



var questions = [
  "Was Kim born in 1985?",
  "Will Rob get out of jail?",
  "Does North seem happy?",
  "Kanye released 'Heartless' in 2008?"
  ]
  
var answers = [
  "yes",
  "no",
  "no",
  "yes"
  ]
  
var kardashians = [
  "Rob Kardashian",
  "Khloe Kardashian",
  "Kourtney Kardashian",
  "Kim Kardashian",
  "Kanye West"
  ]
  
ask(questions,answers)