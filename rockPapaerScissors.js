'use strict';

const getComuterChoice = function () {
  const randomNum = Math.floor(Math.random() * 3) + 1;
  const computerChoice =
    randomNum === 1 ? 'rock' : randomNum === 2 ? 'paper' : 'scissors';
  return computerChoice;
};
getComuterChoice();

const getHumanChoice = function () {
  let humanChoice = prompt('choose rock,paper or scissors').toLowerCase();
  if(humanChoice==='rock'||humanChoice==='paper'||humanChoice==='scissors'){
    return humanChoice
  } 
  else{
    alert(`invalid choice please enter a correct one `);
   return getHumanChoice()
  }
};

let computerSelection = getComuterChoice;
let humanSelection = getHumanChoice;

function playGame() {
  let computerScore = 0;
  let humanScore = 0;
  const playRound = function (computerChoice, humanChoice) {
    if (
      (computerChoice === 'rock' && humanChoice === 'scissors') ||
      (computerChoice === 'paper' && humanChoice === 'rock') ||
      (computerChoice === 'scissors' && humanChoice === 'paper')
    ) {
      computerScore++;
      console.log(`You Lose! ${computerChoice} beats ${humanChoice}`);
    } else if (computerChoice === humanChoice) {
      console.log('draw');
    } else {
      humanScore++;
      console.log(`You Won the round!`);
      console.log(
        `computer chose ${computerChoice} while you chose ${humanChoice}`
      );
    }
  };
  for (let i = 0; i < 5; i++) {
    console.log(`Round:${i + 1}`);
    playRound(getComuterChoice(), getHumanChoice());
  }
  if (computerScore > humanScore) {
    console.log(`you have lost to the cpu (${humanScore}-${computerScore}) `);
  } else if(computerScore < humanScore){
    console.log(`You won (${humanScore}-${computerScore})`);
  }
  else{
    console.log(`Draw! (${humanScore}-${computerScore})`);
  }
}
playGame();
