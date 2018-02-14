choice1 = null;
choice2 = null;

function startGame(e) {
  var choice = e.target.id
  computerChoice()
  choice1 = choice
  console.log(choice)
  console.log(choice1, choice2)
  console.log(compare(choice1, choice2))
}

var choices = document.getElementsByClassName('choice')
for (var i in choices) {
  try {
    choices[i].addEventListener('click', startGame)
  } catch(err) {
    //First load
  }
}

function computerChoice() {
  var computerChoice = Math.random();
  if (computerChoice <= 0.33) {
    choice2 = "rock";
  } else if (0.34 <= computerChoice<= 0.66){
    choice2 = "paper";
  } else {
    choice2 = "scissors";
  }
}

function compare(choice1, choice2){
  if(choice1 == choice2){
    return ("It's TIE!");
  } else if (choice1 == "rock") {
    return rockLogic(choice2);
  } else if(choice1 == "paper"){
      return paperLogic(choice2);
  } else if(choice1 == "scissors"){
    return scissorsLogic(choice2);
  }
}

function rockLogic(choice2){
  if (choice2 == "scissors") {
    return("Rock WINS!");
  } else {
    return("Papers WINS!");
  }
}

function paperLogic(choice2){
  if (choice2 == "rock") {
    return("Paper WINS!");
  } else {
  return("Rock WINS!");
  }
}

function scissorsLogic(choice2){
  if (choice2 == "paper") {
  return("Scissors WINS!");
} else {
  return("Paper WINS!");
  }
}
